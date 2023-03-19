import React from "react";
import { Box, Input, Page, Text } from "zmp-ui";

const PaymentDefault = (props) => {
  return (
    <Page>
      <Box>
        <Text.Header>Thong tin co ban</Text.Header>
        <Input label="Tên chủ xe *" required />
        <Input label="Địa chỉ thường trú *" />
        <Input label="Số điện thoại" />
      </Box>
      <Box>
        <Text.Header>Thong tin co ban</Text.Header>
        <Input label="Mã giới thiệu" />
        <Text>Tóm tắt quyền lợi bảo hiểm xem tại đây</Text>
        <div>
          <Text>Tôi xác nhận đã đọc và nắm rõ quyền lợi bảo hiểm</Text>
        </div>
      </Box>
    </Page>
  );
};

export default PaymentDefault;
