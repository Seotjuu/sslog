## SSLOG

#SSLOG : 부끄럽지만 가족같은 친구들의 쓸데없는 블로그, 쓸로그

```bash

커밋, 푸시 전 배포 상황 확인하고 싶을 때

터미널에서 ->

npm run deploy

자동 배포 | Github Actions 사용
  - main brach push auto deploy

내 얄팍한 지식으로 이해한 Github Actions logic
  - npm run build =>
  - gh-pages branch에 ./out 정적 파일 push 진행
  - Github Secrets TOKEN으로 권한 설정
  - gh-pages branch에 push 완료

```

Open [SSLOG](https://seotjuu.github.io/sslog/)
