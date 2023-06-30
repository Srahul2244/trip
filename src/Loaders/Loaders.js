import { Box } from '@chakra-ui/react'
import React from 'react'
import "./Loaders.css"
const Loaders = () => {
  return (
    <Box display={"flex"} w={"100%"} h={"100vh"} alignItems={"center"} justifyContent={"center"} pos={"fixed"} top={0} left={0} zIndex={20} bg={"gray"} opacity={.9} >
            <Box>
                <div className="col-3">
                    <div className="snippet" data-title="dot-windmill">
                        <div className="stage">
                            <div className="dot-windmill"></div>
                        </div>
                    </div>
                </div>
            </Box>
        </Box>
  )
}

export default Loaders
