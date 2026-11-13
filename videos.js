/*
  현장 영상 목록
  - MP4 파일을 assets/videos/ 폴더에 올린 뒤 아래 배열에 한 줄씩 추가하세요.
  - poster: 영상 썸네일로 쓸 사진. 본문에 같은 사진이 있으면, 그 사진을 클릭했을 때 그 자리에서 영상이 재생됩니다.
  - 순서를 바꾸면 '현장 영상' 섹션의 순서도 바뀝니다. 지우면 사라집니다.

  예시)
  { title:"Kinderboard 부스 시연", src:"assets/videos/kinderboard.mp4", poster:"assets/images/demo-01.jpg" },
  { title:"LumiTeach 상담",       src:"assets/videos/lumiteach.mp4",   poster:"assets/images/demo-04.jpg" },
*/
const VIDEO_CONFIG = [
  { title:"EDUtech Asia 2026 현장 스케치 (1분 30초)", src:"assets/videos/edutech-asia-2026.mp4", poster:"assets/images/video-poster.jpg" },
];

function setupClickVideos() {
  document.querySelectorAll("img").forEach(img => {
    const raw = (img.getAttribute("src") || "").split("?")[0];

    const cfg = VIDEO_CONFIG.find(v =>
      v.poster && (raw.endsWith(v.poster) || raw.endsWith(v.poster.split("/").pop()))
    );

    if (!cfg || img.dataset.videoReady) return;
    img.dataset.videoReady = "1";

    img.style.cursor = "pointer";
    img.title = "클릭하면 영상이 재생됩니다";

    img.addEventListener("click", () => {
      const video = document.createElement("video");

      video.src = cfg.src;
      video.controls = true;
      video.autoplay = true;
      video.playsInline = true;

      video.style.width = img.offsetWidth + "px";
      video.style.height = img.offsetHeight + "px";
      video.style.objectFit = "cover";
      video.style.borderRadius = getComputedStyle(img).borderRadius;
      video.style.background = "#000";

      img.replaceWith(video);
      video.play();
    });
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", setupClickVideos);
} else {
  setupClickVideos();
}
