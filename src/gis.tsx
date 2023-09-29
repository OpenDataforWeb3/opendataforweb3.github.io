import React from 'react';
import ProjectHeader from '../components/gis-project/ProjectHeader';
import ProjectInfo from '../components/gis-project/ProjectInfo';
import {props} from '../utils/utils'

export default function Gis() {
  return (
    <>
      <ProjectHeader title={'GIS'} subTitle={'Graph based Identification of Sybils'} />
      <ProjectInfo props={props} />
    </>
  )
}
