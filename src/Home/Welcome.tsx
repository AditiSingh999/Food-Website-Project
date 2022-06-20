import { Stack, TextField } from "@fluentui/react";
import axios from "axios";
import { Formik, FormikProps } from "formik";
import React, { useEffect, useState } from "react";
import { CartContext, ICartContext } from "../Context/CartContext";
import logo from "../images/logo.jpg";
import bill from "../images/bill.png";

export const Welcome: React.FC = () => {
  const { cart, setCart } = React.useContext(CartContext) as ICartContext;
  const [total, setTotal] = useState(0);

  let localCart: any = localStorage.getItem("cart");
  const token = localStorage.getItem("token");

  const formRef = React.useRef<any>();

  useEffect(() => {
    localCart = JSON.parse(localCart);

    if (localCart) {
      setCart(localCart);

      let totalAmt = 0;
      localCart.map((itm: any) => {
        totalAmt = totalAmt + itm.price;
      });
      setTotal(totalAmt);
    } else setCart([]);
  }, []);

  useEffect(() => {
    axios
      .get("https://localhost:7084/api/Users/test%40test.com", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((data: any) => {
        if (data) {
          const getRecord = () => {
            const val = {
              Name: data.data.name,
              Email: data.data.email,
              Phone: data.data.phone,
              Address: data.data.address,
            };
            formRef.current.setValues(val);
          };
          getRecord();
        }
      });
  }, []);

  return (
    <React.Fragment>
      <Formik
        innerRef={formRef}
        enableReinitialize={true}
        initialValues={{
          Name: "",
          Email: "",
          Phone: "",
          Address: "",
        }}
        onSubmit={(val) => {}}>
        {({ values }) => {
          return (
            <Stack className="Bill_stack">
              <Stack horizontal style={{ width: "100%", height: "100%" }}>
                <img
                  style={{
                    width: "42%",
                    marginRight: "10px",
                  }}
                  src={bill}
                  alt="food"
                />
                <Stack style={{ padding: "10px", width: "100%" }}>
                  <h2>BILLING DETAILS</h2>
                  <table style={{ textAlign: "left" }}>
                    <tbody>
                      <tr>
                        <td>{values.Name}</td>
                      </tr>
                      <tr>
                        <td>{values.Address}</td>
                      </tr>
                      <tr>
                        <td>{values.Email}</td>
                      </tr>
                      <tr>
                        <td>{values.Phone}</td>
                      </tr>
                    </tbody>
                  </table>
                  <h3 style={{ marginTop: "10px" }}>Order Details</h3>
                  <div style={{ width: "100%" }}>
                    <table className="main_table">
                      <tr>
                        <th
                          style={{
                            textAlign: "left",
                            padding: "10px",
                            width: "50%",
                          }}>
                          ITEM
                        </th>
                        <th
                          style={{
                            textAlign: "center",
                            padding: "10px",
                            width: "20%",
                          }}>
                          QUANTITY
                        </th>
                        <th
                          style={{
                            textAlign: "right",
                            padding: "10px",
                            width: "30%",
                          }}>
                          PRICE
                        </th>
                      </tr>

                      <tbody>
                        {cart.map((itm: any) => (
                          <tr>
                            <td style={{ textAlign: "left", padding: "10px" }}>
                              {itm.item}
                            </td>
                            <td
                              style={{ textAlign: "center", padding: "10px" }}>
                              {itm.quantity}
                            </td>
                            <td style={{ textAlign: "right", padding: "10px" }}>
                              ${itm.price}
                            </td>
                          </tr>
                        ))}
                        <tr style={{ borderTop: "1px solid grey" }}>
                          <td></td>
                          <td
                            style={{
                              textAlign: "center",
                              padding: "10px",
                              fontWeight: "bold",
                            }}>
                            TOTAL:
                          </td>
                          <td
                            style={{
                              textAlign: "right",
                              padding: "10px",
                              fontWeight: "bold",
                            }}>
                            ${total}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Stack>
              </Stack>
            </Stack>
          );
        }}
      </Formik>
    </React.Fragment>
  );
};
