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

    public String splitVideo(MultipartFile file) throws IOException {
        String videoId = UUID.randomUUID().toString();
        String originalFileName = file.getOriginalFilename();

        // Create video directory
        File videoDir = new File(storagePath + videoId);
        videoDir.mkdirs();

        System.out.println("Video upload starting to path: " + storagePath +"/"+ videoId);
        // Save original file
        String originalFilePath = storagePath + videoId + "/original.mp4";
        file.transferTo(new File(originalFilePath));

        System.out.println("Video upload finished: " + storagePath +"/"+ videoId);

        // For pure Java, we'll use byte-range splitting (simple but effective)
        // In production, you might want to use a cloud service or external processor
        FileInputStream fileReader = new FileInputStream(originalFilePath);
        if (fileReader.available() == 0) {
            System.out.println("file is empty");
        }
        byte[] fileBytes = fileReader.readAllBytes();
        int chunkSize = 1024 * 1024; // 1MB chunks (adjust based on your needs)
        int totalChunks = (int) Math.ceil((double) fileBytes.length / chunkSize);
        splitVideoBytes(fileBytes, videoId, chunkSize, totalChunks);

        // Save metadata
        saveVideoMetadata(videoId, originalFileName, fileBytes.length,chunkSize,totalChunks);

        return videoId;
    }

    private void splitVideoBytes(byte[] videoBytes, String videoId,int chunkSize, int totalChunks) throws IOException {
        // Simple byte-based splitting (adjust chunk size as needed)

        System.out.println("Total chunks: " + totalChunks);
        System.out.println("Start chunking ");
        for (int i = 0; i < totalChunks; i++) {
            int start = i * chunkSize;
            int end = Math.min(start + chunkSize, videoBytes.length);
            byte[] chunk = Arrays.copyOfRange(videoBytes, start, end);

            String chunkPath = storagePath + videoId + "/chunk_" + i + ".dat";
            System.out.println("Chunk upload starting to path: " + storagePath +"/"+ chunkPath);
            Files.write(Paths.get(chunkPath), chunk);
            System.out.println("Chunk upload finished: " + storagePath +"/"+ chunkPath);
        }
    }

    private void saveVideoMetadata(String videoId, String fileName, long fileSize,int chunkSize, int totalChunks) {
        Map<String, Object> metadata = new HashMap<>();
        metadata.put("videoId", videoId);
        metadata.put("fileName", fileName);
        metadata.put("fileSize", fileSize);
        metadata.put("chunkSize", chunkSize);
        metadata.put("totalChunks", totalChunks);
        metadata.put("createdAt", new Date());

        String metadataPath = storagePath + videoId + "/metadata.json";
        try (FileWriter writer = new FileWriter(metadataPath)) {
            new ObjectMapper().writeValue(writer, metadata);
        } catch (IOException e) {
            throw new RuntimeException("Failed to save metadata", e);
        }
    }

    public byte[] getVideoChunk(String videoId, int chunkIndex) throws Exception {
        String chunkPath = storagePath + videoId + "/chunk_" + chunkIndex + ".dat";
        File chunkFile = new File(chunkPath);

        if (!chunkFile.exists()) {
            throw new FileNotFoundException("Chunk not found");
        }

        return Files.readAllBytes(chunkFile.toPath());
    }

    public Map getVideoMetadata(String videoId) throws Exception {
        String metadataPath = storagePath + videoId + "/metadata.json";
        File metadataFile = new File(metadataPath);

        if (!metadataFile.exists()) {
            throw new FileNotFoundException("Metadata not found");
        }
        System.out.println("Metadata read starting to path: " + storagePath +"/"+ metadataPath);
        return new ObjectMapper().readValue(metadataFile, Map.class);
    }
}