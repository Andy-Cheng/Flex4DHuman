import React, { useEffect } from 'react';
import styled from 'styled-components';
import Paragraph from '../../components/Paragraph.js';
import { SmallGithubIcon, HFIcon, ArxivIcon } from '../../components/Icons.js';
import VideoGallery from '../../components/VideoGallery.js';
import {
    Container,
    ContentOuter,
    ContentInner,
    PaperTitle,
    PaperShortDescription,
    PaperAuthors,
    PaperAuthorOrganizations,
    Title
} from '../Project/Parent.style.js';

const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 40px;
`;

const PillButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 9px 22px;
  border-radius: 9999px;
  background: #1f2d3d;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  line-height: 1;
  transition: background 0.15s ease, transform 0.1s ease;

  &:hover {
    background: #0d1620;
    color: #fff;
    transform: translateY(-1px);
  }

  svg {
    width: 18px;
    height: 18px;
    fill: currentColor;
  }
`;

const dancerIcon = `${process.env.PUBLIC_URL}/dancer192.png`;
const teaserVideo = `${process.env.PUBLIC_URL}/videos/flex4dhuman_method_demo.mp4`;

const videoUrl = (folder, name) => `${process.env.PUBLIC_URL}/videos/${folder}/${name}`;

const MONO_VIDEOS = [
    '0345_08.mp4',
    '0379_09.mp4',
    '0410_05.mp4',
    '0438_02.mp4',
    '0536_06.mp4',
    '0657_05.mp4'
].map((name) => videoUrl('mono', name));

const TWO_REF_VIDEOS = [
    '0022_10.mp4',
    '0166_04.mp4',
    '0173_02.mp4',
    '0326_07.mp4',
    '0410_05.mp4',
    '0536_06.mp4'
].map((name) => videoUrl('2ref', name));

const FOUR_REF_VIDEOS = [
    '0022_10.mp4',
    '0173_02.mp4',
    '0326_07.mp4',
    '0438_02.mp4',
    '0657_05.mp4',
    '0811_06.mp4'
].map((name) => videoUrl('4ref', name));

const APPLICATION_VIDEO = videoUrl('applications', 'application_demo1.mp4');

const PAPER_URL = 'https://arxiv.org/abs/2606.13655';
const CODE_URL = 'https://github.com/Andy-Cheng/Flex4DHuman';
const DATA_URL = 'https://huggingface.co/datasets/andaba/multi-view_caption';

const Flex4DHuman = () => {
    useEffect(() => {
        const originalTitle = document.title;
        document.title = 'Flex4DHuman';

        return () => {
            document.title = originalTitle;
        };
    }, []);

    const authors = [
        {
            name: "Jen-Hao Cheng",
            link: "https://jen-haocheng.com/",
            affiliation: "1,2"
        },
        {
            name: "Yipeng Wang",
            link: "https://www.yipeng.dev",
            affiliation: 2,
            lead: true
        },
        {
            name: "Hao Zhang",
            link: "https://haoz19.github.io",
            affiliation: 2
        },
        {
            name: "Gengshan Yang",
            link: "https://gengshan-y.github.io",
            affiliation: 2
        },
        {
            name: "Jenq-Neng Hwang",
            link: "https://people.ece.uw.edu/hwang/",
            affiliation: 1
        }
    ];

    const affiliations = [
        {
            id: 1,
            name: "University of Washington",
            link: "https://www.washington.edu/"
        },
        {
            id: 2,
            name: "World Labs",
            link: "https://www.worldlabs.ai/"
        }
    ];

    return (
        <Container>
            <ContentOuter>
                <ContentInner>
                    <PaperTitle>
                        <img src={dancerIcon} alt="Flex4DHuman" style={{ width: 40, height: 40, marginRight: 8, verticalAlign: "middle" }} />
                        <span style={{ color: "rgb(231, 173, 138)" }}>Flex</span><span style={{ color: "rgb(178, 86, 40)" }}>4D</span><span style={{ color: "rgb(119, 57, 26)" }}>Human</span>: Flexible Multi-view Video Diffusion for 4D Human Reconstruction
                    </PaperTitle>
                    <PaperShortDescription>
                        Flex4DHuman turns monocular or sparse multi-view videos of dynamic subjects into synchronized dense multi-view videos using only relative camera-pose conditioning — no geometry priors — enabling direct reconstruction of 4D Gaussian splats.
                    </PaperShortDescription>
                    <PaperAuthors>
                        {
                            authors.map((author) => (
                                <div key={author.name}>
                                    <a href={author.link} target="_blank" rel="noopener noreferrer">{author.name}</a>
                                    <sup>{author.affiliation}{author.lead ? ",†" : ""}</sup>
                                </div>
                            ))
                        }
                    </PaperAuthors>
                    <PaperAuthorOrganizations>
                        {
                            affiliations.map((affiliation) => (
                                <div key={affiliation.id}>
                                    <sup>{affiliation.id}</sup>
                                    <a href={affiliation.link} target="_blank" rel="noopener noreferrer">{affiliation.name}</a>
                                </div>
                            ))
                        }
                    </PaperAuthorOrganizations>
                    <div style={{ fontSize: "16px", fontWeight: "300", color: "#8c8c8c", textAlign: "center", marginTop: "8px" }}>
                        <sup>†</sup> Project lead
                    </div>

                    <ButtonRow>
                        <PillButton href={PAPER_URL} target="_blank" rel="noopener noreferrer">
                            <ArxivIcon />
                            <span>arXiv</span>
                        </PillButton>

                        <PillButton href={CODE_URL} target="_blank" rel="noopener noreferrer">
                            <SmallGithubIcon />
                            <span>Code</span>
                        </PillButton>

                        <PillButton href={DATA_URL} target="_blank" rel="noopener noreferrer">
                            <HFIcon />
                            <span>Multi-view Caption Data</span>
                        </PillButton>
                    </ButtonRow>

                    <video
                        src={teaserVideo}
                        controls
                        autoPlay
                        loop
                        muted
                        playsInline
                        style={{ display: "block", width: "100%", marginTop: "32px", borderRadius: "6px", background: "#000" }}
                    />
                    <Paragraph style={{ fontSize: "16px", color: "#8c8c8c", textAlign: "center" }}>
                        Given one or more reference-view videos, their camera poses, and target camera poses, Flex4DHuman synthesizes consistent novel-view videos across target views. These generated multi-view videos can be lifted into dynamic 4D Gaussian splats.
                    </Paragraph>

                    <Paragraph>
                        Flex4DHuman transforms monocular or sparse-view videos into synchronized dense multi-view videos through camera-pose-conditioned video diffusion. Generated synchronized multi-view videos can be reconstructed into 4D Gaussian splats, enabling applications in AR/VR, gaming, simulation, and video re-shooting without specialized multi-camera capture systems.
                    </Paragraph>

                    <Title style={{ marginTop: "48px" }}>
                        Results
                    </Title>
                    <Paragraph>
                        Flex4DHuman synthesizes synchronized dense multi-view videos from a varying number of reference views. Each clip below shows generated novel views for a dynamic subject — click any video to expand it.
                    </Paragraph>

                    <Title style={{ marginTop: "40px", fontSize: "27px" }}>
                        Monocular (1 reference view)
                    </Title>
                    <VideoGallery videos={MONO_VIDEOS} />

                    <Title style={{ marginTop: "40px", fontSize: "27px" }}>
                        2 reference views
                    </Title>
                    <VideoGallery videos={TWO_REF_VIDEOS} />

                    <Title style={{ marginTop: "40px", fontSize: "27px" }}>
                        4 reference views
                    </Title>
                    <VideoGallery videos={FOUR_REF_VIDEOS} />

                    <Title style={{ marginTop: "48px" }}>
                        Applications
                    </Title>
                    <Paragraph>
                        Flex4DHuman enables a practical monocular-video-to-4D asset creation workflow. Given a monocular or sparse-view actor video, it first generates synchronized dense multi-view videos. We then segment the foreground actor and fit the generated views to reconstruct dynamic Gaussian splats, which can be composed into generated 3D scenes and rendered interactively — enabling AR/VR, gaming, simulation, and video re-shooting.
                    </Paragraph>
                    <video
                        src={APPLICATION_VIDEO}
                        controls
                        autoPlay
                        loop
                        muted
                        playsInline
                        style={{ display: "block", width: "100%", marginTop: "24px", borderRadius: "6px", background: "#000" }}
                    />

                    <Title style={{ marginTop: "48px" }}>
                        Acknowledgements
                    </Title>
                    <Paragraph>
                        We thank Justin Johnson, Keunhong Park, Zixuan Huang, Justin Cui, Bardienus Pieter Duisterhof, Yi Hua, Karan Desai, Mohamed El Banani, Minhao Chen, and Raghav Garg for their valuable discussions. We also thank Christoph Lassner, Ben Mildenhall, and Fei-Fei Li for their support throughout this project. We are grateful to Andreas Sundquist for his guidance on SparkJS, and to Brittani Poeppel and Ian Curtis for their assistance and guidance in the use of the Marble worlds. I thank Claude Code (Opus) for tireless coding and ideation throughout this project.
                    </Paragraph>

                    <Title style={{ marginTop: "48px", marginBottom: "16px" }}>
                        BibTeX
                    </Title>
                    <div style={{
                        color: "black",
                        fontSize: "15px",
                        fontWeight: "300",
                        fontFamily: "monospace",
                        whiteSpace: "pre-wrap",
                        backgroundColor: "#f0f0f0",
                        borderRadius: "4px",
                        padding: "32px"
                    }}>
                        {`@article{cheng2026flex4dhuman,
  title={Flex4DHuman: Flexible Multi-view Video Diffusion for 4D Human Reconstruction},
  author={Cheng, Jen-Hao and Wang, Yipeng and Zhang, Hao and Yang, Gengshan and Hwang, Jenq-Neng},
  journal={arXiv preprint arXiv:2606.13655},
  year={2026}
}`}
                    </div>
                </ContentInner>
            </ContentOuter>
        </Container>
    );
};

export default Flex4DHuman;
