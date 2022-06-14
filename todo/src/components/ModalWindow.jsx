import Button from "./Button";
import "../styles/ModalWindow.css";

const ModalWindow = ({
  modalValue,
  setModalValue,
  visible,
  setVisible,
  post,
  patchChangeTask,
}) => {
  const rootClasses = ["modal-window"];

  visible && rootClasses.push("active");

  const saveTask = (uuid) => {
    if(modalValue.length || modalValue.match(/^[ ]+$/)){
        post.name=modalValue;
        setVisible(false);
        patchChangeTask(modalValue, uuid);
    }
  };

  const closeEditing = () => {
    setVisible(false);
  };

  return (
    <div className={rootClasses.join(" ")}>
      <div className="modal-content">
        <textarea
          value={modalValue}
          onChange={(e) => setModalValue(e.target.value)}
        />
        <Button
          body={"Save"}
          callback={() => saveTask(post.uuid)}
        />
        <Button body={"Close"} callback={closeEditing} />
      </div>
    </div>
  );
};

export default ModalWindow;