function Image() {

    return(
        <div>
          <header className="mb-1 max-w-screen-xl mx-auto h-96 flex" style={{position: 'relative'}}>
            <img className="" src="images/imag.png" alt="mainimag" />
            <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}} className="text-center">
              <h1 style={{color: 'white', fontSize: '50px', textAlign: 'center'}} className="font-bold mb-3 w-[800px]">스스로 만들어 나가는 학생부</h1>
              <h3 style={{color: 'white', fontSize: '17px', textAlign: 'center'}}>
                <ul style={{listStyleType: 'none'}} className="font-bold mb-8">
                  <li>블록체인 SBT(소울바운드토큰)를 활용하여</li>
                  <li>학생부를 학생 스스로 설계하여 만들어 나갈 수 있습니다.</li>
                </ul>
              </h3>
              <button className="bg-white m-2 p-3 rounded-lg font-bold ">Make Me 사용(학생용)</button>
              <button className="hover:bg-blue-300 bg-blue-200 m-2 p-3 rounded-lg font-bold ">Make Me 사용(교사용)</button>
            </div>
          </header>
        </div>
    );
}
export default Image;