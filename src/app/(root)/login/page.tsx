"use client";

import { Box, Container } from "@/components";
import { pxToRem } from "@/lib";
import { Button, Card, Flex, Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";

const Login = () => {
     const [form] = useForm();
     const handleFinish = (values: any) => {
          console.log(values);
     };
     return (
          <Container style={{ marginTop: "12%" }}>
               <Flex justify="center">
                    <Box
                         as={Card}
                         $css={{
                              maxWidth: pxToRem(520),
                              width: "var(--full)",
                         }}>
                         <Box $justify="center" $align="center" $mb="var(--xl)">
                              <h1 style={{ fontSize: "30px" }}>Login</h1>

                              {/* <NavigationLink href={ROUTES.home}>
                                   <LuX
                                        size={32}
                                        color="rgba(148, 163, 184, 1)"
                                   />
                              </NavigationLink> */}
                         </Box>
                         <Form form={form} onFinish={handleFinish}>
                              <Form.Item name={"email"}>
                                   <Input placeholder="Email" />
                              </Form.Item>
                              <Form.Item name={"password"}>
                                   <Input.Password placeholder="password" />
                              </Form.Item>

                              <Button
                                   htmlType="submit"
                                   block
                                   size="large"
                                   type="primary">
                                   Submit
                              </Button>
                         </Form>
                    </Box>
               </Flex>
          </Container>
     );
};

export default Login;
