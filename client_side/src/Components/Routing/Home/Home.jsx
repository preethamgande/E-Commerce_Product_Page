import "./Home.css";
export const Home = () => {
  return (
    <>
      <div className="welcome-div">
        <h2 style={{ fontSize: "25px" }}>Welcome to Product Listing Page</h2>
      </div>
      <div id="category1">
        <h2>Beauty,Toys & Many More.. To Shop</h2>
        <div className="container1">
          <div style={{ textAlign: "center" }} className="product-item-c1">
            <img
              src="https://plus.unsplash.com/premium_photo-1684407616442-8d5a1b7c978e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Product Image"
              style={{ width: "280px", height: "280px" }}
            />
            <p style={{ fontWeight: "bold" }}>Beauty Products</p>
            <span style={{ color: "#007bff" }}>From ₹199 </span>
          </div>

          <div style={{ textAlign: "center" }} className="product-item-c1">
            <img
              src="https://img.freepik.com/free-photo/modern-stationary-collection-arrangement_23-2149309643.jpg?semt=ais_hybrid&w=740"
              alt="Product Image"
              style={{ width: "280px", height: "280px" }}
            />
            <p style={{ fontWeight: "bold" }}>Electronics</p>
            <span style={{ color: "#007bff" }}> From ₹1099 </span>
          </div>

          <div style={{ textAlign: "center" }} className="product-item-c1">
            <img
              src="https://plus.unsplash.com/premium_photo-1684795780266-ecd819f04f96?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Product Image"
              style={{ width: "280px", height: "280px" }}
            />
            <p style={{ fontWeight: "bold" }}>Toys</p>
            <span style={{ color: "#007bff" }}> From ₹1000 </span>
          </div>

          <div style={{ textAlign: "center" }} className="product-item-c1">
            <img
              src="https://images.unsplash.com/photo-1589983006655-4ef9a756ebe3?q=80&w=1995&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Product Image"
              style={{ width: "280px", height: "280px" }}
            />
            <p style={{ fontWeight: "bold" }}>Kitchen Appliances</p>
            <span style={{ color: "#007bff" }}> From ₹200 </span>
          </div>
        </div>
      </div>

      <div className="container2">
        <div id="Item1">
          <h3 style={{ color: "whitesmoke", fontWeight: "bold" }}>
            Shop for Fashion
          </h3>
          <p
            style={{
              color: "whitesmoke",
              fontSize: "14px",
              textAlign: "center",
            }}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur
            quibusdam quaerat aperiam? Quam consequatur repellendus consectetur
            voluptate nihil sint reiciendis.
          </p>
        </div>
        <div id="Item2">
          <h3 style={{ color: "whitesmoke", fontWeight: "bold" }}>
            Kids Fashion
          </h3>
          <p
            style={{
              color: "whitesmoke",
              fontSize: "14px",
              textAlign: "center",
            }}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Asperiores, ex!
          </p>
        </div>
        <div id="Item3">
          <h3 style={{ color: "whitesmoke", fontWeight: "bold" }}>
            Shop for winter wear
          </h3>
          <p
            style={{
              color: "whitesmoke",
              fontSize: "14px",
              textAlign: "center",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit,
            delectus!
          </p>
        </div>
      </div>

      <div className="container3">
        <h2 className="section-heading">Shop Electronics </h2>
        <div className="shopElectronics">
          <div
            className="product-item-c2"
            data-product-name="Laptop Pro"
            style={{ textAlign: "center" }}
          >
            <img
              src="https://th.bing.com/th/id/R.0e7a3fffa6f41b8b2cb95c25b0fa791a?rik=oCirMXvWuh5UDA&riu=http%3a%2f%2f3.bp.blogspot.com%2f-OipYuuNx7bc%2fUYznOsel-mI%2fAAAAAAAAA48%2fvoQrFOp9vNI%2fs1600%2flaptop.jpg&ehk=n8GXTV9JaytbWC9ckuoOP0DmWQu5pp7nylPuH9xdb3k%3d&risl=&pid=ImgRaw&r=0"
              alt="Laptop-Img"
            />
            <p>Laptop Pro</p>
            <span className="Price"> ₹35,000 </span>
          </div>

          <div
            className="product-item-c2"
            data-product-name="Meta-vision"
            style={{ textAlign: "center" }}
          >
            <img
              src="https://plus.unsplash.com/premium_photo-1710167120739-72b1df7f6752?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWxlY3Ryb25pYyUyMGFjY2Vzc29yaWVzfGVufDB8fDB8fHww"
              alt="Vision-Img"
            />
            <p>VR Vision</p>
            <span className="Price"> ₹1,50,000 </span>
          </div>

          <div
            className="product-item-c2"
            data-product-name="powerbank"
            style={{ textAlign: "center" }}
          >
            <img
              src="https://sathya.in/media/88986/catalog/electronics-icon-mob-acc.jpg?size=256"
              alt="powerbank-Img"
            />
            <p>Power bank</p>
            <span className="Price"> ₹1500 </span>
          </div>

          <div
            className="product-item-c2"
            data-product-name="Gaming Mouse"
            style={{ textAlign: "center" }}
          >
            <img
              src="https://i5.walmartimages.com/asr/e2ca2653-d5aa-413b-927a-b79aa08b6b11.98e9f1694687ab67cef52ab116302820.jpeg"
              alt="Mouse-img"
            />
            <p>Gaming Mouse X Blade</p>
            <span className="Price"> ₹599 </span>
          </div>

          <div
            className="product-item-c2"
            data-product-name="Wireless keyboard "
            style={{ textAlign: "center" }}
          >
            <img
              src="https://th.bing.com/th/id/R.54fea3564bf14362d1cf11f101fe604f?rik=QJbc%2fSxYP1IPuA&riu=http%3a%2f%2faurorastore.co.za%2fcdn%2fshop%2ffiles%2fBacklitWirelessKeyboard_MouseSet.png%3fv%3d1710506480&ehk=WZ6dn0%2ff2t5p3N1lNXJKxKcfV9ueuuEfWV9O%2fFxhN90%3d&risl=&pid=ImgRaw&r=0"
              alt="Keyboard-Img"
            />
            <p>Wireless Keyboard</p>
            <span className="Price"> ₹1000 </span>
          </div>
          <div
            className="product-item-c2"
            data-product-name="Iphone 16 pro"
            style={{ textAlign: "center" }}
          >
            <img
              src="https://static1.xdaimages.com/wordpress/wp-content/uploads/2023/09/iphone-16-pro-hero-page.jpg"
              alt="Iphone-Img"
            />
            <p>Iphone 16 Pro</p>
            <span className="Price"> ₹75,000 </span>
          </div>
        </div>
      </div>

      <div id="container4">
        <div className="shopFootwears">
          <h2>Shop Footwears</h2>
          <div className="product-item-c3" data-product-name="Nike Shoe">
            <img
              src="https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Brand"
            />
            <p>Nike Shoe</p>
            <span className="Price"> ₹5,000 </span>
          </div>

          <div className="product-item-c3" data-product-name="Vans shoes">
            <img
              src="https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hvZXN8ZW58MHx8MHx8fDA%3D"
              alt="Brand"
            />
            <p>Vans shoes</p>
            <span className="Price"> ₹3,000 </span>
          </div>

          <div className="product-item-c3" data-product-name="Puma shoes">
            <img
              src="https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHNob2VzfGVufDB8fDB8fHww"
              alt="Brand"
            />
            <p>Puma shoes</p>
            <span className="Price"> ₹4,000 </span>
          </div>

          <div className="product-item-c3" data-product-name="Woodland shoes">
            <img
              src="https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHNob2VzfGVufDB8fDB8fHww"
              alt="Brand"
            />
            <p>Woodland shoes</p>
            <span className="Price"> ₹7,000 </span>
          </div>
        </div>
      </div>

      <div className="container5">
        <div id="Text">
          <p>Mens Grooming Kit for sale</p>
          <p style={{ fontWeight: "lighter" }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta
            ipsum labore sed omnis, iure vitae. Veniam soluta facilis quibusdam
            ad ut eius quia vero quod perferendis distinctio vitae, inventore in
            at ea debitis quam impedit reprehenderit ipsum corrupti neque
            expedita.
          </p>

          <p style={{ fontWeight: "lighter" }}>
            To find out the product details click on the link below
          </p>
          <button>Product Details</button>
        </div>
        <div id="Image"></div>
      </div>

      <footer>
        <div className="footer">
          <div id="part1">
            <h2
              style={{
                fontWeight: "lighter",
                textAlign: "center",
                color: "whitesmoke",
                fontSize: "20px",
              }}
            >
              Responsive Footer
            </h2>
            <p
              style={{
                fontWeight: "lighter",
                textAlign: "center",
                padding: "10px",
                fontSize: "14px",
                color: "whitesmoke",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              qui a esse in, officia iusto laborum laboriosam nisi
              exercitationem minima.
            </p>
          </div>
          <div
            id="part2"
            style={{
              fontWeight: "lighter",
              textAlign: "center",
              color: "whitesmoke",
              fontSize: "14px",
            }}
          >
            <h2
              style={{
                fontWeight: "lighter",
                textAlign: "center",
                color: "whitesmoke",
                fontSize: "20px",
              }}
            >
              Some Links
            </h2>
            <p style={{ color: "whitesmoke" }}>FAQ</p>
            <p style={{ color: "whitesmoke" }}>Cookies policy</p>
            <p style={{ color: "whitesmoke" }}>Terms and conditions</p>
            <p style={{ color: "whitesmoke" }}>Support</p>
          </div>
          <div
            id="part3"
            style={{
              fontWeight: "lighter",
              textAlign: "center",
              color: "whitesmoke",
              fontSize: "14px",
            }}
          >
            <h2
              style={{
                fontWeight: "lighter",
                textAlign: "center",
                color: "whitesmoke",
                fontSize: "20px",
              }}
            >
              Contact us
            </h2>
            <p style={{ color: "whitesmoke" }}>Email</p>
            <p style={{ color: "whitesmoke" }}>Mobile</p>
            <p style={{ color: "whitesmoke" }}>Corporate Address</p>
          </div>
          <div
            id="part4"
            style={{
              fontWeight: "lighter",
              textAlign: "center",
              color: "whitesmoke",
              fontSize: "14px",
            }}
          >
            <h2
              style={{
                fontWeight: "lighter",
                textAlign: "center",
                color: "whitesmoke",
                fontSize: "22px",
              }}
            >
              News Letter
            </h2>
            <p style={{ color: "whitesmoke" }}>News Letters</p>
            <p style={{ color: "whitesmoke" }}>Magazines</p>
          </div>
          <div id="part5">
            <div id="part5left">
              <div id="Home">Home</div>
              <div id="About">About</div>
              <div id="Contact">Contact</div>
              <div id="Blog">Blog</div>
              <div id="Social">Social</div>
            </div>
            <div id="part5right">
              <p style={{ fontWeight: "600", color: "whitesmoke" }}>
                Copyright @2020 Responsive footer
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
