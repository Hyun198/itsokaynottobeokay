<div align="center">

  <h1>It's okay to be Not okay</h1>
  <h2>사이코지만 괜찮아</h2>
  
  <>
    Next.js를 이용한 첫 프로젝트 입니다.

<strong>Next.js를 사용한 이유</strong>

  <p>=> 최신 웹 개발의 트렌드에 맞춰 Next.js 이해도가 필요하다고 느꼈고, 해당 프로젝트를 배포 했을때 
  SEO에 유리한 점을 이용하여 해당 프로젝트의 노출을 좀 더 드러내고 싶었습니다.</p>

  <p>재밌게 본 드라마를 바탕으로 제작했습니다. <a href="https://tvn.cjenm.com/ko/tvnpsycho/">사이코지만 괜찮아</a></p>
    <ul>
      - Server Component와 Client Component의 이해
      - App Router를 이용한 경로 처리 
      - Sever 와 Client 단에서 API와의 비동기 통신 경험
      - 장소 데이터를 입력하고 관리하는 CRUD 기능 구현
      - RESTful API 구현
      - 사용자 경험(UI/UX) 개선을 위해 그리드 레이아웃 및 반응형 디자인 적용
    </ul>

  </p>
  <p>
    해당 프로젝트 목적은 드라마 팬들에게 유용한 정보를 제공 
    +추가 구현할 기능(페이지 번역 기능)
  </p>

<!-- Table of Contents -->

# :notebook_with_decorative_cover: Table of Contents

- [Tech Stack](#space_invader-tech-stack)
- [Features](#dart-features)
- [Environment Variables](#key-environment-variables)
- [Getting Started](#toolbox-getting-started)

## :star2: About the Project

<div> 
  <img style="width:300px; height: 350px;" src="./public/main.png"/>
  <img style="width:300px; height: 350px;"src="./public/main2.png"/>
</div>

<!-- TechStack -->

<div align="left">

### :space_invader: Tech Stack

<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://nextjs.org/">Next.js</a></li>
    <li><a href="https://reactjs.org/">React.js</a></li>
  </ul>
</details>

<details>
  <summary>Server</summary>
  <ul>
    <li><a href="https://nestjs.com/">Nest.js</a></li>
  </ul>
</details>
<!-- Features -->

### :dart: Features

<p>드라마 속 장소 정보 제공</p>
<p>장소 추가, 삭제 기능  (swr 라이브러리 사용) => 매번 장소 목록을 불러오는 것이 속도, 사용자 경험에
안좋다고 느낌. 이를 해결하기 위해 사용</p>
<p>반응형 웹 디자인</p>
<p>TMDB API를 이용한 드라마 정보 제공</p>
<p>데이터 관리 (json-server)</p>

<!-- Env Variables -->

### :key: Environment Variables

To run this project, you will need to add the following environment variables to your .env file

.env.local.example 참고해서 설정

- TMDB API KEY
  <strong>NEXT_PUBLIC_TMDB_API_KEY </strong>
- JSON_API_URL
<strong>NEXT_PUBLIC_DB_API_URL</strong>
<!-- Getting Started -->

## :toolbox: Getting Started

development server
<br>

```bash
  npm run dev
```

<br>
build

<br>

```bash
  npm run build
```

<br>
start
<br>

```bash
  npm run start
```

</div>
