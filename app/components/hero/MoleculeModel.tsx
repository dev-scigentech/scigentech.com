"use client"

import { useEffect, useRef, useState } from "react"
import * as THREE from "three"
import { useMousePosition } from "@/hooks/use-mouse"

export default function MoleculeModel() {
  const containerRef = useRef<HTMLDivElement>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
  const modelRef = useRef<THREE.Group | null>(null)
  const mousePosition = useMousePosition()
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    sceneRef.current = scene

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 20
    cameraRef.current = camera

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0x000000, 0) // transparent background
    containerRef.current.appendChild(renderer.domElement)
    rendererRef.current = renderer

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
    directionalLight.position.set(0, 10, 5)
    scene.add(directionalLight)

    const bluePointLight = new THREE.PointLight(0x00a8ff, 10, 50)
    bluePointLight.position.set(-5, 5, 5)
    scene.add(bluePointLight)

    const purplePointLight = new THREE.PointLight(0x9600ff, 10, 50)
    purplePointLight.position.set(5, -5, 5)
    scene.add(purplePointLight)

    // Create molecule model
    const molecule = new THREE.Group()
    modelRef.current = molecule
    scene.add(molecule)

    // Helper function to create atom
    const createAtom = (position: [number, number, number], color: number, size: number) => {
      const geometry = new THREE.SphereGeometry(size, 32, 32)
      const material = new THREE.MeshPhysicalMaterial({
        color: color,
        roughness: 0.2,
        metalness: 0.8,
        emissive: color,
        emissiveIntensity: 0.2,
        transparent: true,
        opacity: 0.9,
        clearcoat: 1.0,
        clearcoatRoughness: 0.1,
      })
      const atom = new THREE.Mesh(geometry, material)
      atom.position.set(...position)
      return atom
    }

    // Helper function to create a connection between atoms
    const createConnection = (start: [number, number, number], end: [number, number, number], color: number) => {
      const direction = new THREE.Vector3(end[0] - start[0], end[1] - start[1], end[2] - start[2])
      const length = direction.length()

      const geometry = new THREE.CylinderGeometry(0.1, 0.1, length, 8)
      const material = new THREE.MeshPhysicalMaterial({
        color: color,
        roughness: 0.4,
        metalness: 0.6,
        emissive: color,
        emissiveIntensity: 0.2,
        transparent: true,
        opacity: 0.7,
      })

      const connection = new THREE.Mesh(geometry, material)
      connection.position.set((start[0] + end[0]) / 2, (start[1] + end[1]) / 2, (start[2] + end[2]) / 2)

      // Rotate to align with the direction between atoms
      direction.normalize()
      const quaternion = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction)
      connection.setRotationFromQuaternion(quaternion)

      return connection
    }

    // Create a DNA-like double helix structure
    const createDoubleHelix = () => {
      const radius = 5
      const turns = 2
      const pointsPerTurn = 10
      const spacing = 3

      const totalPoints = turns * pointsPerTurn
      const colors = [0x00a8ff, 0x9600ff, 0x00d8ff, 0x7000ff]

      // Create first helix
      for (let i = 0; i < totalPoints; i++) {
        const angle = (i / pointsPerTurn) * Math.PI * 2
        const y = (i / totalPoints) * turns * spacing - (turns * spacing) / 2
        const x = Math.cos(angle) * radius
        const z = Math.sin(angle) * radius

        const atom = createAtom([x, y, z], colors[i % colors.length], 0.35)
        molecule.add(atom)

        // Connect consecutive atoms
        if (i > 0) {
          const prevAngle = ((i - 1) / pointsPerTurn) * Math.PI * 2
          const prevY = ((i - 1) / totalPoints) * turns * spacing - (turns * spacing) / 2
          const prevX = Math.cos(prevAngle) * radius
          const prevZ = Math.sin(prevAngle) * radius

          const connection = createConnection([prevX, prevY, prevZ], [x, y, z], colors[(i - 1) % colors.length])
          molecule.add(connection)
        }
      }

      // Create second helix
      for (let i = 0; i < totalPoints; i++) {
        const angle = (i / pointsPerTurn) * Math.PI * 2 + Math.PI // Offset by 180 degrees
        const y = (i / totalPoints) * turns * spacing - (turns * spacing) / 2
        const x = Math.cos(angle) * radius
        const z = Math.sin(angle) * radius

        const atom = createAtom([x, y, z], colors[(i + 2) % colors.length], 0.35)
        molecule.add(atom)

        // Connect consecutive atoms
        if (i > 0) {
          const prevAngle = ((i - 1) / pointsPerTurn) * Math.PI * 2 + Math.PI
          const prevY = ((i - 1) / totalPoints) * turns * spacing - (turns * spacing) / 2
          const prevX = Math.cos(prevAngle) * radius
          const prevZ = Math.sin(prevAngle) * radius

          const connection = createConnection([prevX, prevY, prevZ], [x, y, z], colors[(i + 1) % colors.length])
          molecule.add(connection)
        }
      }

      // Create connecting "rungs" between the helices
      for (let i = 0; i < totalPoints; i += 2) {
        const angle1 = (i / pointsPerTurn) * Math.PI * 2
        const y = (i / totalPoints) * turns * spacing - (turns * spacing) / 2
        const x1 = Math.cos(angle1) * radius
        const z1 = Math.sin(angle1) * radius

        const angle2 = angle1 + Math.PI
        const x2 = Math.cos(angle2) * radius
        const z2 = Math.sin(angle2) * radius

        const connection = createConnection([x1, y, z1], [x2, y, z2], 0xffffff)
        molecule.add(connection)
      }
    }

    // Create orbital electrons
    const createOrbitalElectrons = () => {
      const electronGroup = new THREE.Group()
      molecule.add(electronGroup)

      // Create electron particles
      for (let i = 0; i < 30; i++) {
        const geometry = new THREE.SphereGeometry(0.1, 16, 16)
        const material = new THREE.MeshPhongMaterial({
          color: 0x00ffff,
          emissive: 0x00ffff,
          emissiveIntensity: 1,
          transparent: true,
          opacity: 0.8,
        })

        const electron = new THREE.Mesh(geometry, material)

        // Random starting positions on various orbital paths
        const orbitalRadius = Math.random() * 7 + 5
        const angle = Math.random() * Math.PI * 2
        const elevationAngle = Math.random() * Math.PI * 2

        electron.position.set(
          orbitalRadius * Math.cos(angle) * Math.sin(elevationAngle),
          orbitalRadius * Math.cos(elevationAngle),
          orbitalRadius * Math.sin(angle) * Math.sin(elevationAngle),
        )

        // Store animation parameters
        electron.userData = {
          orbitalRadius,
          speed: Math.random() * 0.03 + 0.01,
          angle,
          elevationAngle,
          elevationSpeed: Math.random() * 0.01 - 0.005,
        }

        electronGroup.add(electron)
      }
    }

    // Add floating data points
    const createDataPoints = () => {
      const dataGroup = new THREE.Group()
      molecule.add(dataGroup)

      for (let i = 0; i < 50; i++) {
        const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2)
        const color = new THREE.Color(Math.random() * 0.3 + 0.7, Math.random() * 0.5 + 0.5, Math.random() * 0.3 + 0.7)

        const material = new THREE.MeshPhongMaterial({
          color: color,
          transparent: true,
          opacity: Math.random() * 0.5 + 0.3,
        })

        const dataPoint = new THREE.Mesh(geometry, material)

        // Position randomly in a sphere around the molecule
        const radius = Math.random() * 10 + 8
        const theta = Math.random() * Math.PI * 2
        const phi = Math.random() * Math.PI

        dataPoint.position.set(
          radius * Math.sin(phi) * Math.cos(theta),
          radius * Math.cos(phi),
          radius * Math.sin(phi) * Math.sin(theta),
        )

        // Store animation properties
        dataPoint.userData = {
          originalPosition: dataPoint.position.clone(),
          pulsateSpeed: Math.random() * 0.02 + 0.01,
          pulsateAmount: Math.random() * 0.2 + 0.1,
          rotateSpeed: Math.random() * 0.05 + 0.01,
        }

        dataGroup.add(dataPoint)
      }
    }

    // Create all the elements
    createDoubleHelix()
    createOrbitalElectrons()
    createDataPoints()

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)

      if (modelRef.current) {
        // Rotate the entire molecule
        modelRef.current.rotation.y += 0.002
        modelRef.current.rotation.x += 0.0005

        // Animate electrons
        modelRef.current.children.forEach((child) => {
          if (child.type === "Group") {
            child.children.forEach((element) => {
              if (element.userData.orbitalRadius !== undefined) {
                // Electron animation
                element.userData.angle += element.userData.speed
                element.userData.elevationAngle += element.userData.elevationSpeed

                const radius = element.userData.orbitalRadius
                const angle = element.userData.angle
                const elevationAngle = element.userData.elevationAngle

                element.position.set(
                  radius * Math.cos(angle) * Math.sin(elevationAngle),
                  radius * Math.cos(elevationAngle),
                  radius * Math.sin(angle) * Math.sin(elevationAngle),
                )
              } else if (element.userData.originalPosition) {
                // Data point animation
                element.rotation.x += element.userData.rotateSpeed
                element.rotation.y += element.userData.rotateSpeed

                // Pulsating effect
                const pulsate = Math.sin(Date.now() * element.userData.pulsateSpeed) * element.userData.pulsateAmount
                element.scale.set(1 + pulsate, 1 + pulsate, 1 + pulsate)

                // Subtle movement
                element.position.x = element.userData.originalPosition.x + Math.sin(Date.now() * 0.001) * 0.2
                element.position.y = element.userData.originalPosition.y + Math.sin(Date.now() * 0.002) * 0.2
                element.position.z = element.userData.originalPosition.z + Math.sin(Date.now() * 0.001) * 0.2
              }
            })
          }
        })

        // Adjust the model's orientation based on mouse position
        if (mousePosition.x !== null && mousePosition.y !== null) {
          const targetRotationY = (mousePosition.x / window.innerWidth - 0.5) * 0.5
          const targetRotationX = (mousePosition.y / window.innerHeight - 0.5) * -0.3

          modelRef.current.rotation.y += (targetRotationY - modelRef.current.rotation.y) * 0.05
          modelRef.current.rotation.x += (targetRotationX - modelRef.current.rotation.x) * 0.05
        }
      }

      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current)
      }
    }

    animate()
    setLoaded(true)

    // Handle window resize
    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current) return

      cameraRef.current.aspect = window.innerWidth / window.innerHeight
      cameraRef.current.updateProjectionMatrix()
      rendererRef.current.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)

      if (rendererRef.current && containerRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement)
        rendererRef.current.dispose()
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 transition-opacity duration-1000 ${loaded ? "opacity-100" : "opacity-0"}`}
      style={{
        width: "100%",
        height: "100%",
        zIndex: 1,
      }}
    />
  )
}
