import styled from 'styled-components';
import { Timeline } from 'antd';

const { Item:AntdTimelineItem } = Timeline;

const TimelineItemShort = styled(AntdTimelineItem)`
    min-height: 60px;
    @media (max-width: 1200px) {
        min-height: 60px;
    }
    @media (max-width: 480px) {
        min-height: 120px;
    }
`;


const TimelineItemMedium = styled(AntdTimelineItem)`
    min-height: 80px;
    @media (max-width: 1200px) {
        min-height: 80px;
    }
    @media (max-width: 480px) {
        min-height: 240px;
    }
`;

const TimelineItemLong1 = styled(AntdTimelineItem)`
    min-height: 120px;
    @media (max-width: 1200px) {
        min-height: 120px;
    }
    @media (max-width: 480px) {
        min-height: 300px;
    }
`;



const TimelineItemLong2 = styled(AntdTimelineItem)`
    min-height: 120px;
    @media (max-width: 1200px) {
        min-height: 120px;
    }
    @media (max-width: 480px) {
        min-height: 420px;
    }
`;


export { TimelineItemShort, TimelineItemMedium, TimelineItemLong1, TimelineItemLong2 };
