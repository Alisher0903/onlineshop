import React, { useEffect, useState } from "react";
import { Button, Input, Modal, ModalBody, ModalFooter, ModalHeader, Table, FormGroup, Label, Container } from "reactstrap";
import axios from "axios";
import { url } from "../api/api";
import { toast } from "react-toastify";
import NavbarUser from "../navbar/NavBarUser";

function Category() {

    const [categores, setCategory] = useState([]);
    const [addModal, setAddModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [category, setIdCategory] = useState(false);

    useEffect(() => {
        getCategory();
    }, []);

    // open modal
    const openAddModal = () => setAddModal(!addModal);

    // edit modal
    const openEditModal = () => setEditModal(!editModal);

    // open delete modal
    const openDeleteModal = () => setDeleteModal(!deleteModal);

    // get categores
    function getCategory() {
        axios.get(url + "category/").then(res => setCategory(res.data));
    }

    // add categores
    function addCategory() {
        let obj = {
            title: document.getElementById('titleCategory').value
        }
        axios.post(url + "category/", obj).then(() => {
            openAddModal();
            getCategory();
            toast.success("Categorya muvaffaqiyatli saqlandi");
        }).catch(() => {
            toast.error("So'rovda xatolik yuz berdi!");
            openAddModal();
        })
    }

    // edit category
    function editCategory() {
        let editObj = {
            title: document.getElementById("editCategory").value
        }
        axios.put(url + "category/" + category.id + "/", editObj).then(() => {
            openEditModal();
            getCategory();
            toast.success("Malumotni muvaffaqiyatli taxrirladingiz👍");
        }).catch(() => {
            toast.error("So'rovda xatolik yuz berdi!")
            openEditModal();
        })
    }

    // delete Category
    function deleteCategory() {
        axios.delete(url + "category/" + category.id + "/").then(() => {
            getCategory();
            openDeleteModal();
            toast.success("Categoriya muvaffaqiyatli o'chirildi!")
        }).catch(err => {
            openDeleteModal();
            toast.error("So'rovda xatolik yuz berdi!")
            console.log(err);
        })
    }

    return (
        <Container>
            <NavbarUser />
            <Button color="primary" className="px-3 py-2 mt-3" onClick={openAddModal}>Categorya qo'shish</Button>
            <Table className="mt-4" bordered>
                <thead className="text-center">
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th colSpan={2}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        categores.map((item, i) =>
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{item.title}</td>
                                <td><Button color="warning" outline onClick={() => {
                                    openEditModal();
                                    setIdCategory(item);
                                }}>Edit</Button></td>
                                <td><Button color="danger" outline onClick={() => {
                                    openDeleteModal();
                                    setIdCategory(item);
                                }}>Delete</Button></td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>

            {/* Add Category */}
            <Modal isOpen={addModal}>
                <ModalHeader toggle={openAddModal}>Categorya qo'shish</ModalHeader>
                <ModalBody>
                    <FormGroup floating>
                        <Input id="titleCategory" placeholder="Title" />
                        <Label for="titleCategory">Title</Label>
                    </FormGroup>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={openAddModal}>Yopish</Button>
                    <Button color="success" onClick={addCategory}>Qo'shish</Button>
                </ModalFooter>
            </Modal>

            {/* edit modal */}
            <Modal isOpen={editModal}>
                <ModalHeader toggle={openEditModal}>Edit Category</ModalHeader>
                <ModalBody>
                    <FormGroup floating>
                        <Input id="editCategory" placeholder="Title" />
                        <Label for="editCategory">Title</Label>
                    </FormGroup>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={openEditModal}>Yopish</Button>
                    <Button color="success" onClick={editCategory}>Saqlash</Button>
                </ModalFooter>
            </Modal>

            {/* delete modal */}
            <Modal isOpen={deleteModal}>
                <ModalHeader toggle={openDeleteModal}>Delete Category</ModalHeader>
                <ModalBody>Haqiqatdan ham bu categoryani o'chirmoqchimisiz?</ModalBody>
                <ModalFooter>
                    <Button onClick={openDeleteModal}>Yopish</Button>
                    <Button onClick={deleteCategory} color="danger">O'chirish</Button>
                </ModalFooter>
            </Modal>
        </Container>
    );
}
export default Category;