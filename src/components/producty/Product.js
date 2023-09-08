import { Button, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Table, InputGroup, Container } from "reactstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { url } from "../api/api";
import './product.css';
import { toast } from "react-toastify";
import UserNav from "../navbar/UserNav";

function Product() {

    const [producty, setProduct] = useState([]);
    const [categores, setCategory] = useState([]);
    const [addModal, setAddModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [product, setIdProduct] = useState("");

    useEffect(() => {
        getProduct();
        getCategory();
    }, []);

    const openAddModal = () => setAddModal(!addModal);            // open add modal
    const openEditModal = () => setEditModal(!editModal);         // open edit modal
    const openDeleteModal = () => setDeleteModal(!deleteModal);   // open delete modal

    // get category
    function getCategory() {
        axios.get(url + "category/").then(res => setCategory(res.data));
    }

    // get product
    function getProduct() {
        axios.get(url + "product/").then(res => setProduct(res.data));
    }

    // productObj
    function getObj() {
        const productObj = new FormData();
        productObj.append("image", document.getElementById('img').files[0]);
        productObj.append("title", document.getElementById('title').value);
        productObj.append("description", document.getElementById('description').value);
        productObj.append("price", document.getElementById('price').value);
        productObj.append("capacity", document.getElementById('capacity').value);
        productObj.append("category_id", document.getElementById('category').value);
        return productObj;
    }

    // addProduct
    function addProduct() {
        axios.post(url + 'product/', getObj())
            .then(() => {
                openAddModal();
                getProduct();
                toast.success('Product muvaffaqiyatli saqlandi!')
            }).catch(() => {
                toast.error("error");
                openAddModal();
            })
    }

    // edit product
    function editProduct() {
        axios.put(url + "product/" + product.id + "/", getObj())
            .then(() => {
                openEditModal();
                getProduct();
                toast.success("Product muvaffaqiyatli taxrirlandi!")
            }).catch(() => {
                toast.error("error");
                openEditModal();
            })
    }

    // deleteProduct
    function deleteProduct() {
        axios.delete(url + 'product/' + product.id + "/")
            .then(() => {
                openDeleteModal();
                getProduct();
                toast.success('Product muvaffaqiyatli o\'chirildi!');
            }).catch(err => {
                openDeleteModal();
                toast.error("So'rovda xatolik yuz berdi!!!")
            })
    }

    // search
    function search() {
        let searchVal = document.getElementById('search').value
        if (!!searchVal) axios.get(url + 'product/?title=' + searchVal).then(res => setProduct(res.data))
        else getProduct();
    }

    return (

        <Container>
            <UserNav /> {/* navbar menu */}

            {/* addProduct */}
            <Button color="primary" className="px-4 mt-3" onClick={openAddModal}>Add Product</Button>

            {/* search */}
            <InputGroup className="float-end w-25 mt-3" >
                <Input placeholder="🔍Search..." id="search" onKeyDown={search} />
                <Button color="success" onClick={search}>Search</Button>
            </InputGroup>

            {/* table */}
            <Table bordered className="mt-4">
                <thead className="text-center">
                    <tr>
                        <th>#</th>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Price (UZS)</th>
                        <th colSpan={2}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        producty.map((item, i) =>
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td><img className="img-style" src={item.image} alt="Type__image" /></td>
                                <td>{item.title}</td>
                                <td>{item.description}</td>
                                <td>{item.price}</td>
                                <td><Button color="warning" outline onClick={() => {
                                    setIdProduct(item);
                                    openEditModal();
                                }}>Edit</Button></td>
                                <td><Button color="danger" outline onClick={() => {
                                    setIdProduct(item);
                                    openDeleteModal();
                                }}>Delete</Button></td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>


            {/* add product modal */}
            <Modal isOpen={addModal}>
                <ModalHeader toggle={openAddModal}>
                    Add Product
                </ModalHeader>
                <ModalBody>
                    <FormGroup>
                        <Input id="img" type="file" />
                    </FormGroup>
                    <FormGroup floating>
                        <Input id="title" placeholder="Title" />
                        <Label for="title">Title</Label>
                    </FormGroup>
                    <FormGroup floating>
                        <Input id="description" placeholder="Description" />
                        <Label for="description">Description</Label>
                    </FormGroup>
                    <FormGroup floating>
                        <Input type="number" id="price" placeholder="Price" />
                        <Label for="price">Price</Label>
                    </FormGroup>
                    <FormGroup floating>
                        <Input id="capacity" placeholder="Capacity" />
                        <Label for="capacity">Capacity</Label>
                    </FormGroup>
                    <select className="form-select" id="category">
                        <option selected disabled>Select category</option>
                        {
                            categores.map((item, i) =>
                                <option key={i} value={item.id}>{item.title}</option>
                            )
                        }
                    </select>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={openAddModal} className="px-3">Close</Button>
                    <Button color="success" className="px-3" onClick={addProduct}>Save</Button>
                </ModalFooter>
            </Modal>

            {/* edit product modal */}
            <Modal isOpen={editModal}>
                <ModalHeader toggle={openEditModal}>
                    Edit Product
                </ModalHeader>
                <ModalBody>
                    <FormGroup>
                        <Input id="img" type="file" />
                    </FormGroup>
                    <FormGroup floating>
                        <Input id="title" placeholder="Title" defaultValue={product.title} />
                        <Label for="title">Title</Label>
                    </FormGroup>
                    <FormGroup floating>
                        <Input id="description" placeholder="Description" defaultValue={product.description} />
                        <Label for="description">Description</Label>
                    </FormGroup>
                    <FormGroup floating>
                        <Input type="number" id="price" placeholder="Price" defaultValue={product.price} />
                        <Label for="price">Price</Label>
                    </FormGroup>
                    <FormGroup floating>
                        <Input id="capacity" placeholder="Capacity" defaultValue={product.capacity} />
                        <Label for="capacity">Capacity</Label>
                    </FormGroup>
                    <select className="form-select" id="category">
                        <option selected disabled>Select category</option>
                        {
                            categores.map((item, i) =>
                                <option key={i} value={item.id}>{item.title}</option>
                            )
                        }
                    </select>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={openEditModal} className="px-3">Close</Button>
                    <Button color="success" className="px-3" onClick={editProduct}>Save</Button>
                </ModalFooter>
            </Modal>

            {/* delete product modal */}
            <Modal isOpen={deleteModal}>
                <ModalHeader toggle={openDeleteModal}>
                    Delete Product
                </ModalHeader>
                <ModalBody>
                    Siz bu ma'lumotlarni rostdan ham o'chirib yubormoqchimisiz?
                </ModalBody>
                <ModalFooter>
                    <Button onClick={openDeleteModal} className="px-3">Close</Button>
                    <Button color="danger" className="px-3" onClick={deleteProduct}>Delete</Button>
                </ModalFooter>
            </Modal>
        </Container>
    )
}
export default Product;