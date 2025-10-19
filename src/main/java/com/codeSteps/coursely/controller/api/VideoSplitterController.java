package com.codeSteps.coursely.controller.api;

import com.codeSteps.coursely.service.VideoSplitterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/video")
public class VideoSplitterController {

    @Autowired
    private VideoSplitterService videoSplitterService;

    @PostMapping("/upload")
    public ResponseEntity<Map<String, Object>> uploadVideo(@RequestParam("file") MultipartFile file) {
        try {
            String videoId = videoSplitterService.splitVideo(file);
            Map<String, Object> response = new HashMap<>();
            response.put("videoId", videoId);
            response.put("message", "Video uploaded and split successfully");
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            return ResponseEntity.status(500).body(Map.of("error", Arrays.toString(e.getStackTrace())));
        }
    }

    @GetMapping("/chunk/{videoId}/{chunkIndex}")
    public ResponseEntity<byte[]> getVideoChunk(
            @PathVariable String videoId,
            @PathVariable int chunkIndex) {
        try {
            byte[] chunkData = videoSplitterService.getVideoChunk(videoId, chunkIndex);
            return ResponseEntity.ok()
                    .contentType(MediaType.valueOf("video/mp4"))
                    .header("Content-Type", "video/mp4")
                    .header("Accept-Ranges", "bytes")
                    .header("Content-Length", String.valueOf(chunkData.length))
                    .body(chunkData);
//            return ResponseEntity.ok()
//                    .contentType(MediaType.APPLICATION_OCTET_STREAM)
//                    .header("Content-Disposition", "attachment; filename=\"chunk_" + chunkIndex + ".mp4\"")
//                    .body(chunkData);
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/metadata/{videoId}")
    public ResponseEntity<Map<String, Object>> getVideoMetadata(@PathVariable String videoId) {
        try {
            Map<String, Object> metadata = videoSplitterService.getVideoMetadata(videoId);
            return ResponseEntity.ok(metadata);
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }
}