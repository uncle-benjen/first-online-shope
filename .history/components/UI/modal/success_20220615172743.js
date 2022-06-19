import Modal from "./Modal";

const Success = (props)=>{
    return(
        <Modal onClose={props.onClose}>
            <div>tnx for your help</div>
         </Modal>

    );
};

export default Success;