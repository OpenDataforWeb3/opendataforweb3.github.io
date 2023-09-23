import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim"; 
import { options } from "../../utils/utils";
import styles from "../../styles/gis-component/ProjectHeader.module.css"

const ParticlesComponent = () => {

    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);
    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options= {options}
			className={styles.tsparticles}
        />
    );
};
export default ParticlesComponent;
