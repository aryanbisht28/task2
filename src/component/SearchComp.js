import React from "react";
import { Input, Space } from "antd";
import { AudioOutlined } from "@ant-design/icons";

function SearchComp() {
  const { Search } = Input;

  const onSearch = (value) => console.log(value);
  return (
    <div>
      <Search placeholder="input search text" onSearch={onSearch} enterButton />
    </div>
  );
}

export default SearchComp;
