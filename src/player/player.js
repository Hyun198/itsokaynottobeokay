import './player.style.css'
export default function player() {
    return (
        <div className="player">
            <div className="album-cover">
                <img src="" alt="album_cover" />
            </div>

            <div className="album-info">
                <p>앨범 제목</p>
                <p>아티스트</p>
            </div>

            <div className="player-btn">
                <button>이전</button>
                <button>재생</button>
                <button>다음</button>
            </div>

        </div>
    )
}