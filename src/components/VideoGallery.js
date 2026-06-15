import React, { useState } from 'react';
import { Modal } from 'antd';
import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 12px;
  overflow-x: auto;
  padding-bottom: 8px;
  margin-top: 24px;

  /* slimmer scrollbar */
  &::-webkit-scrollbar {
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: #d9d9d9;
    border-radius: 4px;
  }
`;

/* Exactly three previews fit the visible width; gap is 12px, so two gaps (24px)
   are subtracted before dividing by three. Additional videos scroll horizontally. */
const Item = styled.div`
  flex: 0 0 calc((100% - 24px) / 3);
  display: flex;
  flex-direction: column;
`;

const Cell = styled.div`
  position: relative;
  cursor: pointer;
  border-radius: 6px;
  overflow: hidden;
  background: #000;
  transition: transform 0.15s ease, box-shadow 0.15s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.18);
  }

  video {
    display: block;
    width: 100%;
    height: auto;
  }
`;

const SourceLink = styled.a`
  display: block;
  margin-top: 8px;
  font-size: 13px;
  color: #8c8c8c;
  text-align: center;

  &:hover {
    color: #1f2d3d;
  }
`;

const ExpandHint = styled.div`
  position: absolute;
  bottom: 6px;
  right: 8px;
  color: #fff;
  font-size: 16px;
  opacity: 0.85;
  pointer-events: none;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.6);
`;

const VideoGallery = ({ videos, sources }) => {
    const [active, setActive] = useState(null);

    return (
        <>
            <Row>
                {videos.map((src, i) => (
                    <Item key={src}>
                        <Cell onClick={() => setActive(src)}>
                            <video
                                src={src}
                                muted
                                loop
                                autoPlay
                                playsInline
                                preload="metadata"
                                ref={(el) => { if (el) el.playbackRate = 2; }}
                            />
                            <ExpandHint>⤢</ExpandHint>
                        </Cell>
                        {sources && sources[i] && (
                            <SourceLink
                                href={sources[i]}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                            >
                                Source Link
                            </SourceLink>
                        )}
                    </Item>
                ))}
            </Row>

            <Modal
                open={active !== null}
                visible={active !== null}
                footer={null}
                onCancel={() => setActive(null)}
                width="80%"
                style={{ maxWidth: 1100, top: 40 }}
                bodyStyle={{ padding: 0, background: '#000' }}
                centered
                destroyOnClose
            >
                {active && (
                    <video
                        src={active}
                        controls
                        autoPlay
                        loop
                        playsInline
                        style={{ display: 'block', width: '100%', height: 'auto' }}
                    />
                )}
            </Modal>
        </>
    );
};

export default VideoGallery;
