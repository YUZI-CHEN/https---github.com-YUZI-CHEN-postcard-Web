import React, { useState } from 'react';

function Popover({ id, onClick }) {
  return (
    <div id={id} className="popover">
      <div className="popover-title">
        <img src="./images/寄.svg" alt="" />
        <img src="./images/件.svg" alt="" />
        <img src="./images/總.svg" alt="" />
        <img src="./images/數.svg" alt="" />
      </div>
      <div className="pcIndexPage-total"></div>
      <div className="r-title">
        <img src="./images/排.svg" alt="" />
        <img src="./images/行.svg" alt="" />
        <img src="./images/榜.svg" alt="" />
      </div>
      <div className="pcIndexPage-rankings"></div>
      <button onClick={onClick} className='taiwan-closeButton'>Close</button> {/* Close button */}
    </div>
  );
}

function TaiwanPage() {
  const [popoverId, setPopoverId] = useState(null);

  const togglePopoverWithDynamicPosition = (event, id) => {
    // Your existing logic for positioning and toggling popovers.
    setPopoverId(id);
  };

  return (
    <div id="pcIndexPage-taiwan">
      <img src="./images/taiwan_picture.svg" alt="" />
      {/* 離島 */}
      <div id="pcIndexPage-islands" className="point">
        <button onClick={(event) => togglePopoverWithDynamicPosition(event, 'popover1')}></button>
        {popoverId === 'popover1' && <Popover id="popover1" onClick={() => setPopoverId(null)} />}
      </div>
      {/* 北部 */}
      <div id="pcIndexPage-north" className="point">
        <button onClick={(event) => togglePopoverWithDynamicPosition(event, 'popover2')}></button>
        {popoverId === 'popover2' && <Popover id="popover2" onClick={() => setPopoverId(null)} />}
      </div>
      {/* 中部 */}
      <div id="pcIndexPage-central" className="point">
        <button onClick={(event) => togglePopoverWithDynamicPosition(event, 'popover3')}></button>
        {popoverId === 'popover3' && <Popover id="popover3" onClick={() => setPopoverId(null)} />}
      </div>
      {/* 南部 */}
      <div id="pcIndexPage-south" className="point">
        <button onClick={(event) => togglePopoverWithDynamicPosition(event, 'popover4')}></button>
        {popoverId === 'popover4' && <Popover id="popover4" onClick={() => setPopoverId(null)} />}
      </div>
      {/* 東部 */}
      <div id="pcIndexPage-east" className="point">
        <button onClick={(event) => togglePopoverWithDynamicPosition(event, 'popover5')}></button>
        {popoverId === 'popover5' && <Popover id="popover5" onClick={() => setPopoverId(null)} />}
      </div>
    </div>
  );
}

export default TaiwanPage;