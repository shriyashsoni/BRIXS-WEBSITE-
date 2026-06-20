import cv2
import os
from pathlib import Path

def process_all_videos():
    input_dir = Path("3d model amied vides ANDS ALL")
    output_base_dir = Path("3D motions website folders")
    output_base_dir.mkdir(parents=True, exist_ok=True)
    
    video_files = list(input_dir.glob("*.mp4"))
    
    for i, video_path in enumerate(video_files, 1):
        model_name = f"model-{i}"
        frames_dir = output_base_dir / model_name
        frames_dir.mkdir(exist_ok=True)
        
        cap = cv2.VideoCapture(str(video_path))
        if not cap.isOpened():
            print(f"Failed to open {video_path}")
            continue
            
        orig_width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
        orig_height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
        
        frame_count = 0
        while True:
            ret, frame = cap.read()
            if not ret:
                break
                
            # Scale to 75% for extremely high quality but reduced file size
            width = int(orig_width * 0.75)
            height = int(orig_height * 0.75)
            frame = cv2.resize(frame, (width, height), interpolation=cv2.INTER_AREA)
            
            frame_filename = frames_dir / f"frame_{frame_count:04d}.webp"
            # Save at 90 quality for visually lossless but small file size
            cv2.imwrite(str(frame_filename), frame, [cv2.IMWRITE_WEBP_QUALITY, 90])
            frame_count += 1
            
        cap.release()
        print(f"Processed {model_name} from {video_path.name}: {frame_count} frames")

if __name__ == "__main__":
    process_all_videos()
