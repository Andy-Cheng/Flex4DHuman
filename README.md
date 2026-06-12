<div align="center">

# Flex4DHuman: Flexible Multi-view Video Diffusion for 4D Human Reconstruction

[Jen-Hao Cheng](https://jen-haocheng.com/)<sup>1,2</sup> &nbsp;·&nbsp;
[Yipeng Wang](https://www.yipeng.dev)<sup>2,†</sup> &nbsp;·&nbsp;
[Hao Zhang](https://haoz19.github.io)<sup>2</sup> &nbsp;·&nbsp;
[Gengshan Yang](https://gengshan-y.github.io)<sup>2</sup> &nbsp;·&nbsp;
[Jenq-Neng Hwang](https://people.ece.uw.edu/hwang/)<sup>1</sup>

<sup>1</sup> [University of Washington](https://www.washington.edu/) &nbsp;&nbsp; <sup>2</sup> [World Labs](https://www.worldlabs.ai/)

<sup>†</sup> Project lead

[![Project Page](https://img.shields.io/badge/Project-Page-1f2d3d)](https://andy-cheng.github.io/Flex4DHuman/)
[![arXiv](https://img.shields.io/badge/arXiv-coming%20soon-b31b1b)](#)
[![Data](https://img.shields.io/badge/%F0%9F%A4%97%20Multi--view%20Caption-Data-yellow)](https://huggingface.co/datasets/andaba/multi-view_caption)

</div>

---

## Overview

**Flex4DHuman** turns monocular or sparse multi-view videos of dynamic subjects into
synchronized **dense multi-view videos** using only **relative camera-pose conditioning**
— no geometry priors — enabling direct reconstruction of **4D Gaussian splats**.

Given one or more reference-view videos, their camera poses, and a set of target camera
poses, Flex4DHuman synthesizes consistent novel-view videos across the target views
through camera-pose-conditioned video diffusion. The generated synchronized multi-view
videos can then be lifted into 4D Gaussian splats, enabling applications in
AR/VR, gaming, simulation, and video re-shooting.

<div align="center">

![Flex4DHuman demo](flex4dhuman_demo_short.gif)

</div>

## Highlights

- **Flexible input** — works from a monocular or multi-reference views.
- **Pose-only conditioning** — relies solely on relative camera poses; no SMPL/geometry priors required.
- **Synchronized dense multi-view output** — temporally and cross-view consistent novel views.
- **Direct 4D reconstruction** — generated views can be lifted into 4D Gaussian splats.

## News

- **2026-06-11** — Project page released. Code release is in preparation — stay tuned.


## Data

We release the **Multi-view Caption** dataset used in this project on Hugging Face:


See [`andaba/multi-view_caption`](https://huggingface.co/datasets/andaba/multi-view_caption)
for contents and licensing.

## Citation

If you find our work useful, please consider citing:

```bibtex
@article{cheng2026flex4dhuman,
  title={Flex4DHuman: Flexible Multi-view Video Diffusion for 4D Human Reconstruction},
  author={Cheng, Jen-Hao and Wang, Yipeng and Zhang, Hao and Yang, Gengshan and Hwang, Jenq-Neng},
  journal={arXiv preprint},
  year={2026}
}
```
