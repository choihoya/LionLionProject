import {Modal,ModalOverlay,ModalContent,ModalHeader,ModalFooter,ModalBody,ModalCloseButton,Button, useDisclosure,Lorem} from '@chakra-ui/react'
function Modals({account}) {

  const { isOpen, onOpen, onClose } = useDisclosure()
    return (

        <>
          <button onClick={onOpen} className="mr-0 hover:bg-gray-300 bg-gray-100 m-2 pl-5 pr-5 pt-3 pb-3 rounded-lg font-bold ">
                                주소확인
          </button>

          <Modal onClose={onClose} isOpen={isOpen} isCentered>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>메타마스크 주소</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                {/* <Lorem count={2} /> */}
                <div>
                  {account}
                </div>
              </ModalBody>
              <ModalFooter>
                <Button onClick={onClose}>Close</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      )
}

export default Modals;
