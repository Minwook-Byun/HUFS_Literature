function FixedModal() {
  return (
    <div>
      <div className="inline-block fixed bg-white rounded-lg z-10 bottom-0 right-0 h-16 overflow-hidden  shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:h-15">
        <div className="flex items-end justify-center pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="rounded-md shadow">
            <a
              href="https://forms.gle/oPiRDqzJoXd96toX8"
              className="w-full flex items-center rounded-md shadow justify-center px-2 py-1 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-1 md:text-lg md:px-3"
            >
              입부 신청서 작성
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FixedModal;
