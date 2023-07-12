import { useEffect, useState } from 'react';
import { contract } from '../web3.config';

function CheckStudentData({ account, setAccount }) {
  const [teacheraddress, setTeacherAddress] = useState();
  const [data, setData] = useState([]);
  const [displayedData, setDisplayedData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [teacheraddress2, setTeacherAddress2] = useState("");

  const checkStudentData = async () => {
    try {
      const response = await contract.methods.checkstudentdatafunction(teacheraddress).call();
      console.log(response);
      setData(response);
      setDisplayedData(response.slice(0, 9)); // Display 10 items at a time
    } catch (error) {
      console.error(error);
    }
  };

  const handleNext = () => {
    const nextIndex = currentIndex + 9;
    setDisplayedData(data.slice(nextIndex, nextIndex + 9));
    setCurrentIndex(nextIndex);
  };

  const handlePrevious = () => {
    const previousIndex = currentIndex - 9;
    setDisplayedData(data.slice(previousIndex, previousIndex + 9));
    setCurrentIndex(previousIndex);
  };

  const checkTeacher = async () => {
    try {
      const response = await contract.methods.getTeacher(teacheraddress2).call();
      setTeacherAddress2(response);
      console.log(teacheraddress2);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className=' mt-3.5 mb-2 max-w-screen-xl mx-auto h-[365px] '>
        <div className='flex'>
          <div className='ml-8 font-semibold'>1. SBT 신청 학생 확인 </div>
          <div className='text-white'>..</div>
          <div>
            <input
              value={teacheraddress2}
              onChange={(e) => setTeacherAddress2(e.target.value)}
              placeholder="선생님 메타마스크 주소"
              className="text-center mr-2"
              style={{ marginLeft: '2px', border: '1px solid black', borderRadius: '0.5rem' }}
            />
            <button onClick={checkTeacher} className='mr-5'>권한확인</button>                
          </div>
          <input
            value={teacheraddress}
            onChange={(e) => {
              setTeacherAddress(e.target.value);
            }}
            placeholder='선생님 메타마스크 주소'
            className='text-center ml-2'
            style={{ marginLeft: '2px', border: '1px solid black', borderRadius: '0.5rem' }}
          />
          <button className='ml-3' onClick={checkStudentData}>
            확인
          </button>
        </div>


      <div className='grid grid-columns-1 w-[1230px] h-[315px]  mt-2 mb-7 max-w-screen-xl mx-auto bg '>
        <div className="ml-3.5 rounded-lg border border-gray-300 p-5 mr-6 mb-2 w-[1210px] h-[320px] pl-10">
          {displayedData.map((item, index) => (
            <div className=' mt-1 flex mb-1 ' key={index}>
              <div>TokenId: {item[0]}</div>
              <div className='ml-3'>SBT신청 Uri : {item[1]}</div>
              <button className='ml-16'>확인완료</button>            
            </div>
          ))}

          <div className='flex justify-end'>
            {currentIndex > 0 && (
              <button className='bg-blue-100 hover:bg-blue-200 pl-5 pr-5 rounded mr-3.5 mt-1.5' onClick={handlePrevious}>
                이전
              </button>
            )}    
            {currentIndex + 9 < data.length && (
              <button className='bg-blue-100 hover:bg-blue-200 pl-5 pr-5 rounded mr-3.5 mt-1.5' onClick={handleNext}>
                다음
              </button>
            )}
          </div>
        </div>
        <div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default CheckStudentData;
