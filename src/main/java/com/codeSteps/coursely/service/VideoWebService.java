package com.codeSteps.coursely.service;

import com.codeSteps.coursely.dto.VideoWebDTO;
import com.codeSteps.coursely.entity.Course;
import com.codeSteps.coursely.entity.Video;
import com.codeSteps.coursely.repository.CourseRepository;
import com.codeSteps.coursely.repository.VideoRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Transactional
public class VideoWebService {

    private final VideoRepository videoRepository;
    private final CourseRepository courseRepository;

    public VideoWebService(VideoRepository videoRepository, CourseRepository courseRepository) {
        this.videoRepository = videoRepository;
        this.courseRepository = courseRepository;
    }

    public List<VideoWebDTO> getAllVideos() {
        return videoRepository.findAll()
                .stream()
                .map(this::toDTO)
                .collect(Collectors.toList());
    }

    public List<VideoWebDTO> getVideosByCourseId(Long courseId) {
        return videoRepository.findByCourseId(courseId)
                .stream()
                .map(this::toDTO)
                .collect(Collectors.toList());
    }

    public Optional<VideoWebDTO> getVideoById(Long id) {
        return videoRepository.findById(id)
                .map(this::toDTO);
    }

    @Transactional
    public VideoWebDTO createVideo(VideoWebDTO dto) {
        Course course = courseRepository.findById(dto.getCourseId())
                .orElseThrow(() -> new RuntimeException("Course not found with ID: " + dto.getCourseId()));

        Video video = new Video();
        updateVideoFromDTO(video, dto, course);

        Video savedVideo = videoRepository.save(video);
        return toDTO(savedVideo);
    }

    @Transactional
    public Optional<VideoWebDTO> updateVideo(Long id, VideoWebDTO dto) {
        return videoRepository.findById(id)
                .map(video -> {
                    Course course = courseRepository.findById(dto.getCourseId())
                            .orElseThrow(() -> new RuntimeException("Course not found with ID: " + dto.getCourseId()));

                    updateVideoFromDTO(video, dto, course);
                    return toDTO(videoRepository.save(video));
                });
    }

    @Transactional
    public void deleteVideo(Long id) {
        try {
            if (!videoRepository.existsById(id)) {
                throw new RuntimeException("Video not found with ID: " + id);
            }
            videoRepository.deleteById(id);
        } catch (Exception e) {
            throw new RuntimeException("Error deleting video: " + e.getMessage(), e);
        }
    }

    private VideoWebDTO toDTO(Video video) {
        VideoWebDTO dto = new VideoWebDTO();
        dto.setId(video.getId());
        dto.setTitle(video.getTitle());
        dto.setUrl(video.getUrl());
        dto.setThumbnailUrl(video.getThumbnailUrl());
        dto.setPrice(video.getPrice());
        dto.setFree(video.isFree());
        dto.setStorageType(video.getStorageType());
        dto.setDuration(video.getDuration());
        dto.setSeries(video.getSeries());
        dto.setCourseId(video.getCourse().getId());
        dto.setCourseName(video.getCourse().getTitle());
        return dto;
    }

    private void updateVideoFromDTO(Video video, VideoWebDTO dto, Course course) {
        video.setTitle(dto.getTitle());
        video.setUrl(dto.getUrl());
        video.setThumbnailUrl(dto.getThumbnailUrl());
        video.setPrice(dto.getPrice());
        video.setFree(dto.isFree());
        video.setStorageType(dto.getStorageType());
        video.setDuration(dto.getDuration());
        video.setSeries(dto.getSeries());
        video.setCourse(course);
    }
}