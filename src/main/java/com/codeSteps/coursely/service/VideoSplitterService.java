package com.codeSteps.coursely.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.*;

// VideoSplitterService.java - Pure Java implementation
@Service
public class VideoSplitterService {

    @Value("${video.chunk.duration:5}")
    private int chunkDuration;

    @Value("${video.storage.path:./videos/}")
    private String storagePath;


    public String splitVideo(MultipartFile file) throws Exception {
        String videoId = UUID.randomUUID().toString();
        String originalFileName = file.getOriginalFilename();

        // Create video directory
        File videoDir = new File(storagePath + videoId);
        videoDir.mkdirs();

        System.out.println("Video upload starting to path: " + storagePath + "/" + videoId);

        // Save original file
        String originalFilePath = storagePath + videoId + "/original.mp4";
        file.transferTo(new File(originalFilePath));

        System.out.println("Video upload finished: " + storagePath + "/" + videoId);

        // For testing: create mock MP4 chunks (just copy the original file multiple times)
        createMockVideoChunks(originalFilePath, videoId);

        // Save metadata
        saveVideoMetadata(videoId, originalFileName, 5); // Mock 5 chunks

        return videoId;
    }


    private void createMockVideoChunks(String originalFilePath, String videoId) throws IOException {
        // Read the original video file
        byte[] originalBytes = Files.readAllBytes(Paths.get(originalFilePath));

        // Create 5 identical chunks for testing (in real scenario, use FFmpeg)
        for (int i = 0; i < 5; i++) {
            String chunkPath = storagePath + videoId + "/chunk_" + i + ".mp4"; // Use .mp4 extension
            Files.write(Paths.get(chunkPath), originalBytes);
            System.out.println("Created mock chunk " + i + " at " + chunkPath);
        }
    }

    private int splitVideoWithFFmpeg(String inputPath, String videoId) throws Exception {
        // First, get video duration
        long duration = getVideoDuration(inputPath);
        int totalChunks = (int) Math.ceil((double) duration / chunkDuration);

        System.out.println("Video duration: " + duration + "s, Total chunks: " + totalChunks);

        // Split video using FFmpeg
        for (int i = 0; i < totalChunks; i++) {
            int startTime = i * chunkDuration;
            String outputPath = storagePath + videoId + "/chunk_" + i + ".mp4";

            ProcessBuilder pb = new ProcessBuilder(
                    "ffmpeg",
                    "-ss", String.valueOf(startTime),
                    "-i", inputPath,
                    "-t", String.valueOf(chunkDuration),
                    "-c", "copy", // Copy without re-encoding
                    "-avoid_negative_ts", "make_zero",
                    outputPath
            );

            Process process = pb.start();
            int exitCode = process.waitFor();

            if (exitCode == 0) {
                System.out.println("Created chunk " + i + " at " + outputPath);
            } else {
                throw new RuntimeException("FFmpeg failed for chunk " + i);
            }
        }

        return totalChunks;
    }

    private long getVideoDuration(String filePath) throws Exception {
        ProcessBuilder pb = new ProcessBuilder(
                "ffmpeg", "-i", filePath, "-f", "null", "-"
        );

        Process process = pb.start();
        String errorOutput = new String(process.getErrorStream().readAllBytes());
        process.waitFor();

        // Parse duration from FFmpeg output
        java.util.regex.Pattern pattern = java.util.regex.Pattern.compile("Duration: (\\d+):(\\d+):(\\d+)\\.(\\d+)");
        java.util.regex.Matcher matcher = pattern.matcher(errorOutput);

        if (matcher.find()) {
            int hours = Integer.parseInt(matcher.group(1));
            int minutes = Integer.parseInt(matcher.group(2));
            int seconds = Integer.parseInt(matcher.group(3));
            return hours * 3600 + minutes * 60 + seconds;
        }

        throw new RuntimeException("Could not determine video duration");
    }


    private void saveVideoMetadata(String videoId, String fileName, int totalChunks) {
        Map<String, Object> metadata = new HashMap<>();
        metadata.put("videoId", videoId);
        metadata.put("fileName", fileName);
        metadata.put("totalChunks", totalChunks);
        metadata.put("chunkDuration", chunkDuration);
        metadata.put("createdAt", new Date());

        String metadataPath = storagePath + videoId + "/metadata.json";
        try (FileWriter writer = new FileWriter(metadataPath)) {
            new ObjectMapper().writeValue(writer, metadata);
        } catch (IOException e) {
            throw new RuntimeException("Failed to save metadata", e);
        }
    }

    public byte[] getVideoChunk(String videoId, int chunkIndex) throws Exception {
        String chunkPath = storagePath + videoId + "/chunk_" + chunkIndex + ".mp4"; // Changed to .mp4
        File chunkFile = new File(chunkPath);

        if (!chunkFile.exists()) {
            throw new FileNotFoundException("Chunk not found: " + chunkPath);
        }

        return Files.readAllBytes(chunkFile.toPath());
    }


    public Map getVideoMetadata(String videoId) throws Exception {
        String metadataPath = storagePath + videoId + "/metadata.json";
        File metadataFile = new File(metadataPath);

        if (!metadataFile.exists()) {
            throw new FileNotFoundException("Metadata not found");
        }

        System.out.println("Metadata read starting to path: " + storagePath + "/" + metadataPath);
        return new ObjectMapper().readValue(metadataFile, Map.class);
    }
}