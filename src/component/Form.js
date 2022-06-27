import React, { useContext, useEffect, useState } from 'react';
import { Row, Col, Nav, Button, Form, Toast } from 'react-bootstrap';
import { Link, useNavigate,useLocation } from 'react-router-dom';
import Service from '../../service/index'
import { ContactFormInfo } from '../Actions/ContactForm/ContactForm';
import './footer.scss'
import parse from 'html-react-parser'
import { toast } from 'react-toastify'
import MainContext from '../../MainContext/MainContext';



const Footer = () => {
    const [footerInfo, setFooterInfo] = useState([])
    const [technologies, setTechnologies] = useState([])
    const [aboutUsInfo, setAboutUsInfo] = useState([])
    const [formData, setFormData] = useState({})
    const [errorPhone, setErrorPhone] = useState('')
    const [errorName, setErrorName] = useState('')
    const [errorMsg, setErrorMsg] = useState('')
    const [errormail, setErrorMail] = useState('')
    const [onlyOneClick, setOnlyOneClick] = useState(true)
    const [show, setShow] = useState(false);
    const { setLoader } = useContext(MainContext);
    const location=useLocation();



    const Navigate = useNavigate()

    useEffect(() => {
        getFooterInfo()
    }, [])

    const getFooterInfo = async () => {
        try {
            const response = await Service.makeAPICall({
                methodName: Service.getMethod,
                api_url: Service.footer
            })
            if (response?.data) {
                setFooterInfo(response?.data)

                const newTechnologies = Object.values(response?.data?.column_1?.links).map((item) => {
                    return (
                        {
                            url: item?.url.replace('https://staging.elsner.com', ""),
                            title: item?.title
                        }
                    )
                })

                setTechnologies(newTechnologies)

                const newAboutus = Object.values(response?.data?.column_2?.links).map((item) => {
                    return (
                        {
                            url: item?.url.replace('https://staging.elsner.com', ""),
                            title: item?.title
                        }
                    )
                })
                setAboutUsInfo(newAboutus)
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleAboutusLink = (url) => {
        const newUrl = url.replace('https://staging.elsner.com', "")
        Navigate(newUrl)
    }

    const handleTechnlogiesLink = (url) => {
        const newUrl = url.replace('https://staging.elsner.com', "")
        Navigate(newUrl)
    }

    const onInput = (e) => {
        const { name, value } = e.target;
        formData[name] = value;
        setFormData({ ...formData })
        validation({ [name]: value })
    }

    const validation = (value) => {

        const namereg = new RegExp(/^(?!\s)([a-z ,.'-]+)$/i)
        const emailreg = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
        const phonereg = new RegExp(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/)

        if (value?.your_name?.length >= 0) {
            if (!value?.your_name) {
                setErrorName('Enter the name')
                return;
            } else if (!namereg.test(value?.your_name)) {
                setErrorName("Enter  the valid name")
                return;
            }
            else {
                setErrorName(null)
            } return
        }

        if (value?.your_email?.length >= 0) {
            if (!value?.your_email) {
                setErrorMail('Enter the E-mail')
                return;
            } else if (!emailreg.test(value?.your_email)) {
                setErrorMail("Enter the valid E-mail")
                return;
            } else {
                setErrorMail(null)
                return
            }
        }

        if (value?.your_phone?.length >= 0) {
            if (!value?.your_phone) {
                setErrorPhone('Enter phone nubmber')
                return
            } else if (!phonereg.test(value?.your_phone)) {
                setErrorPhone("Enter Valid Number")
                return
            } else {
                setErrorPhone(null)
                return
            }
        }

        if (value?.your_message?.length >= 0) {
            if (!value?.your_message) {
                setErrorMsg('Enter message')
                return
            } else {
                setErrorMsg(null)
                return
            }
        }
    }


    const HandleContactform = (e) => {
        e.preventDefault();
        if (onlyOneClick) {
            setOnlyOneClick(false)
            const params = "/49/feedback"
            const form = new FormData();
            if (formData) {
                ContactFormInfo(successContactFormInfo, setLoader, formData, form, params, setOnlyOneClick)
            }
        }
    }

    const successContactFormInfo = (res) => {
        // setShow(true)
        // console.log(res, "res");
        if (res?.status === "mail_sent") {
            toast.success(res?.message)
        }
        else {
            toast.error(res?.message)
        }
    }

    return <>
        <div className={location?.pathname !=="/" ? "site-footer inner-footer" : "site-footer"} id="footer-contact">
            <div className='section-content'>
                <div className='home-contact container'>
                    <Row>
                        <Col md={6} lg={4}>
                            <div className='block-title'>
                                <h4><span>Contact </span>Us</h4>
                                <p>Let's discuss your project with our <Link to="">best brains!</Link></p>
                            </div>
                            <div className='home-contact-form'>
                                <Form onSubmit={(e) => HandleContactform(e)}>
                                    <Form.Group controlId="name" className='form-group'>
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control name="your_name" onChange={(e) => onInput(e)} type="text" placeholder="Alex h. Johns" required />
                                        <span style={{
                                            "color": "red"
                                        }}>{errorName}</span>
                                    </Form.Group>
                                    <Form.Group controlId="email" className='form-group'>
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control name="your_email" onChange={(e) => onInput(e)} type="email" placeholder="Alexjohns589@yahoo.co.in" required />
                                        <span style={{
                                            "color": "red"
                                        }}>{errormail}</span>
                                    </Form.Group>
                                    <Form.Group controlId="phone" className='form-group'>
                                        <Form.Label>Phone</Form.Label>
                                        <Form.Control name="your_phone" onChange={(e) => onInput(e)} type="text" placeholder="+44 265-568-63" required />
                                        <span style={{
                                            "color": "red"
                                        }}>{errorPhone}</span>
                                    </Form.Group>
                                    <Form.Group controlId="message" className='form-group'>
                                        <Form.Label>Message</Form.Label>
                                        <Form.Control name="your_message" onChange={(e) => onInput(e)} as="textarea" placeholder="I have great idea ..." required />
                                        <span style={{
                                            "color": "red"
                                        }}>{errorMsg}</span>
                                    </Form.Group>
                                    <Button variant="primary" type="submit" className='button'>
                                        <span>SEND MESSAGE</span>
                                    </Button>
                                </Form>
                            </div>
                        </Col>
                        <Col md={6} lg={8}>
                            <div className='home-contact-right'>
                                <Row>
                                    <Col lg={4} md={12} sm={6} className='mobile-order-2'>
                                        <div className='home-contact-links'>
                                            <h5>{footerInfo?.column_1?.title}</h5>
                                            <Nav as="ul">
                                                {/* {technologies.map((item, index) => (
                                                    <Nav.Item key={index} as="li">
                                                        <Nav.Link onClick={() => handleTechnlogiesLink(item?.url)}>{item?.title}</Nav.Link>
                                                    </Nav.Item>
                                                ))} */}
                                                 {technologies.map((item, index) => (
                                                    <Nav.Item key={index} as="li">
                                                        <Link to={item?.url}>{item?.title}</Link>
                                                    </Nav.Item>
                                                ))}
                                            </Nav>
                                        </div>
                                    </Col>
                                    <Col lg={8} className='mobile-order-1'>
                                        <h5>{footerInfo.column_2?.title}</h5>
                                        <div className='home-contact-links about-link'>
                                            <Nav as="ul">
                                                {/* {aboutUsInfo.map((item, index) => (
                                                    <Nav.Item key={index} as="li">
                                                        <Nav.Link onClick={() => handleAboutusLink(item?.url)}>{item?.title}</Nav.Link>
                                                    </Nav.Item>
                                                ))} */}
                                                {aboutUsInfo.map((item, index) => {
                                                    return (
                                                        <Nav.Item key={index} as="li">
                                                            <Link to={item?.url}>{item?.title}</Link>
                                                        </Nav.Item>
                                                    )
                                                }
                                                )}
                                            </Nav>
                                        </div>
                                    </Col>
                                    <Col lg={4} md={12} sm={6} className='mobile-order-3'>
                                        <div className='home-contact-links'>
                                            <h5>{footerInfo?.column_3?.title}</h5>
                                            <Nav as="ul">
                                                <Nav.Item as="li">
                                                    <Nav.Link href={`tel:${footerInfo?.social_media?.phone?.number}`}>{footerInfo?.social_media?.phone?.number}</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item as="li">
                                                    <Nav.Link href={`mailto:${footerInfo?.social_media?.email?.address}`}>{footerInfo?.social_media?.email?.address}</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item as="li">
                                                    <Nav.Link href="#">{footerInfo?.social_media?.skype?.id}</Nav.Link>
                                                </Nav.Item>
                                            </Nav>
                                        </div>
                                    </Col>
                                    <Col lg={4} md={12} sm={6} className='mobile-order-4'>
                                        <div className='home-contact-links'>
                                            <h5>{footerInfo?.column_4?.title}</h5>
                                            <address >
                                                <strong>{footerInfo?.column_4?.content_title}</strong><br />
                                                {footerInfo?.column_4?.content ? <>
                                                    {parse(footerInfo?.column_4?.content)}
                                                </> : null}
                                            </address>
                                        </div>
                                    </Col>
                                    <Col lg={4} md={12} sm={6} className='mobile-order-5'>
                                        <div className='home-contact-links'>
                                            <h5 className='d-tab-none'>&nbsp;</h5>
                                            <address>
                                                <strong>{footerInfo?.column_5?.content_title}</strong><br />
                                                {footerInfo?.column_5?.content ? <>
                                                    {parse(footerInfo?.column_5?.content)}
                                                </> : null}
                                            </address>
                                        </div>
                                    </Col>
                                </Row>
                                <div className='home-contact-awards'>
                                    <img src={footerInfo?.column_6?.certified_logo ? footerInfo?.column_6?.certified_logo : ""} alt="award" width={490} height={55} />
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <div className='copy-right'>
                        <p>{footerInfo?.column_6?.copyrights.replaceAll('%CURRENT_YEAR%', new Date().getFullYear())}</p>
                    </div>
                </div>
            </div>
        </div>

    </>;
};

export default Footer;
