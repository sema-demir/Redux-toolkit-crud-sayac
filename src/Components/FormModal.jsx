import { Modal, Button, Form, FormControl, FormGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addTask, editTask } from "../Redux/slices/crudSlice";

const FormModal = ({ isOpen, handleClose, editItem }) => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();

    //console.log(e);
    //form data classında ornek olustur
    const formData = new FormData(e.target);

    //formdaki inputların verisini objeye çeviriyoruz
    const taskData = Object.fromEntries(formData.entries());

    if (editItem) {
      // güncellenecek eleman varsa güncellenceğini haber ver
      dispatch(editTask({ id: editItem.id, ...taskData }));
    } else {
      // yoksa reducera veri ekleneceğini haber ver
      dispatch(addTask(taskData));
    }
    //reducera veri eklenecegini haber ver
    dispatch(addTask(task));
    //modalı kapat
    handleClose();
  };
  return (
    <Modal centered className="text-black" show={isOpen} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          {editItem ? "Görevi Güncelle" : "Yeni Görev Ekle"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit} className="d-flex flex-column gap-4">
          <FormGroup>
            <Form.Label>Görev tanımı</Form.Label>
            <Form.Control
              defaultValue={editItem?.title}
              name="title"
              placeholder="Görevi yaz"
              required
            />
          </FormGroup>
          <FormGroup>
            <Form.Label>İsminiz</Form.Label>
            <Form.Control
              defaultValue={editItem?.author}
              name="author"
              placeholder="İsim yazınız"
              required
            />
          </FormGroup>
          <FormGroup>
            <Form.Label>Olusturan</Form.Label>
            <Form.Control
              defaultValue={editItem?.assigned_to}
              name="assigned_to"
              placeholder="İsim yazınız"
              required
            />
          </FormGroup>
          <FormGroup>
            <Form.Label>Son Teslim Tarihi</Form.Label>
            <Form.Control
              defaultValue={editItem?.end_date}
              name="end_date"
              type="date"
              required
            />
          </FormGroup>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              İptal
            </Button>
            <Button type="submit" variant="primary">
              {editItem ? "Kaydet" : "Oluştur"}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default FormModal;
