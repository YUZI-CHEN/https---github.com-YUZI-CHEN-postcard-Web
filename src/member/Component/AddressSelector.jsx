import { useState } from "react";
import { database2 } from "../js/database";
import "./add.css";



export default function AddressSelector() {
  const [selectedCounty, setSelectedCounty] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [districts, setDistricts] = useState([]);
  const [address, setAddress] = useState('');
  // 更新縣市選擇
  const handleCountyChange = (event) => {
    const county = event.target.value;
    setSelectedCounty(county);
    setSelectedDistrict('');
    setAddress('');
    setDistricts(county ? Object.keys(database2[county]) : []);
  };

  // 更新鄉鎮市區選擇
  const handleDistrictChange = (event) => {
    const district = event.target.value;
    setSelectedDistrict(district);
    setAddress(district ? `${district} (${database2[selectedCounty][district]})` : '');
  };
  return (
    <div>


      {/* 縣市選擇 */}
      <div id="district-box" >

        <label htmlFor="district">地址:</label>
        <div className="dropdown">
        
          <select id="county_box" value={selectedCounty} onChange={handleCountyChange}>
            <option value="">選擇縣市</option>
            {Object.keys(database2).map((county) => (
              <option key={county} value={county}>
                {county}
              </option>
            ))}
          </select>

          {/* 鄉鎮市區選擇 */}
         
          <select
            id="district_box"
            value={selectedDistrict}
            onChange={handleDistrictChange}
            disabled={!selectedCounty}
          >
            <option value="">選擇鄉鎮市區</option>
            {districts.map((district) => (
              <option key={district} value={district}>
                {district}
              </option>
            ))}
          </select>

          {/* 顯示完整地址 */}
          <div>
         
            <input
              id="address_box"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)} // 添加事件處理
            />
          </div>
        </div>

      </div>
    </div>

  )
}