function Introduc() {
  return (
    <div className="overflow-hidden">
      <img
        className="block mb-20 h-46 w-full sm:h-69 md:h-92 lg:w-full lg:h-full"
        src="http://img.hani.co.kr/imgdb/resize/2018/0817/00502987_20180817.JPG"
        alt="외대 문학회 소개 이미지"
      />
      <h3 className="text-center text-1xl mx-6 font-extrabold text-gray-900 sm:text-2xl md:text-3xl">
        <strong className="hover:text-indigo-600">외대 문학회는</strong> <br />
        단순히 책을 읽는{' '}
        <strong className="hover:text-indigo-600">동아리가</strong>
        아닙니다.
        <br />
        함께 읽고 함께 쓰며 함께
        <br /> 문우로 자라나가요?
      </h3>
    </div>
  );
}
export default Introduc;
