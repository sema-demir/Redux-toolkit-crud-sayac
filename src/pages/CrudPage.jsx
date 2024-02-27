import { useState } from "react";
import { Button, Stack, Table, ButtonGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormModal from "../Components/FormModal";
import { deleteTask } from "../Redux/slices/crudSlice";

const CrudPage = () => {
  const dispatch = useDispatch();
  const counterState = useSelector((store) => store.counterReducer);
  const crudState = useSelector((store) => store.crudReducer);

  //modal acıkmı
  const [isOpen, setIsOpen] = useState(false);

  // düzenlenecek eleman stateyti
  const [editItem, setEditItem] = useState(null);

  return (
    <div className="p-3">
      <Stack className="align-items-end my-4">
        <Button onClick={() => setIsOpen(true)}> Yeni Görev Ekle</Button>
      </Stack>

      {/* tablo bölümü */}
      <Table
        striped
        bordered
        hover
        responsive
        variant={counterState.isDarkTheme ? "dark" : "light"}
      >
        <thead>
          <tr>
            <th>#</th>
            <th>Görev</th>
            <th>Yazan</th>
            <th>Atanan</th>
            <th>Tarih</th>
            <th>İşlemler</th>
          </tr>
        </thead>
        <tbody>
          {crudState.task.map((task, i) => (
            <tr key={i}>
              <td>{i} </td>
              <td>{task.title} </td>
              <td>{task.author}</td>
              <td>{task.assigned_to}</td>
              <td>{task.end_date}</td>
              <td>
                <ButtonGroup size="sm">
                  <Button
                    onClick={() => dispatch(deleteTask(task.id))}
                    variant="danger"
                  >
                    Sil
                  </Button>
                  <Button
                    onClick={() => {
                      setEditItem(task);
                      setIsOpen(true);
                    }}
                  >
                    Düzenle
                  </Button>
                </ButtonGroup>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal bolümü */}
      <FormModal
        isOpen={isOpen}
        handleClose={() => {
          setIsOpen(false);
          setEditItem(null);
        }}
        editItem={editItem}
      />
    </div>
  );
};

export default CrudPage;
