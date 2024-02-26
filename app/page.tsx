import Link from "next/link";

export default function Home() {
  return (
    <>
      메인 페이지입니다.<br></br>
      <Link href="/signin">로그인페이지로</Link>
    </>
  );
}
