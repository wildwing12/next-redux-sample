import React,{useState} from "react";
import {Carousel} from "react-bootstrap";

function Mianpage() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div>
        <Carousel activeIndex={index} onSelect={handleSelect} >
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://cdnweb01.wikitree.co.kr/webdata/editor/202005/29/img_20200529132104_2ba13833.webp"
                    alt="First slide"
                    height="300px"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202112/01/e9cf0b6a-3b97-4e3d-b460-b4b49e43ad09.jpg"
                    alt="Second slide"
                    height="300px"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://img.hankyung.com/photo/201905/20190521005023_5ce2ccbf135f0_1.jpg"
                    alt="Third slide"
                    height="300px"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>
    );
}

export default Mianpage;