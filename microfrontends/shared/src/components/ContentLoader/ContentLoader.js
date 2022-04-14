import React from 'react'
import SkeletonBase from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { Box } from '@/components'
import { useTheme } from 'styled-components'

const Skeleton = (props) => {
  const {
    colors: { contentLoader },
  } = useTheme()
  return (
    <Box
      as={SkeletonBase}
      baseColor={contentLoader?.base}
      highlightColor={contentLoader?.highlight}
      {...props}
    />
  )
}

export default Skeleton

export const ContentLoaderBlockHeading = (props) => {
  return (
    <Box {...props}>
      <Skeleton height="lg" mb="1rem" maxWidth="15rem" />
      <Skeleton height="xl" />
    </Box>
  )
}

export const ContentLoaderSidebarCount = (props) => <Skeleton {...props} />

ContentLoaderSidebarCount.defaultProps = {
  height: 'md',
  width: 'md',
}

export const ContentLoaderBlock = (props) => <Skeleton {...props} />

ContentLoaderBlock.defaultProps = {
  height: '100%',
  width: '100%',
}
