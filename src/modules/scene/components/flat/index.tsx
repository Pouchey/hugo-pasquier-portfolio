/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
interface FlatProps {
  nodes: { [name: string]: any };
  materials: { [name: string]: any };
}

export default ({ nodes, materials }: FlatProps) => {
  return (
    <group name="Flat" rotation={[0, -Math.PI / 2, 0]}>
      <group name="Ceiling_1" position={[3.27, 0.33, -2.24]}>
        <group
          name="arrow-2"
          position={[1.72, 8.39, -1.85]}
          rotation={[0, 0.77, 0]}
        >
          <mesh
            name="Celling_Projectorprojector_set_GEO3_Celling_Projectorprojecto"
            castShadow
            receiveShadow
            geometry={
              nodes
                .Celling_Projectorprojector_set_GEO3_Celling_Projectorprojecto
                .geometry
            }
            material={materials.Celling_Projectorprojector_metal}
            position={[-0.85, 0.22, 0.14]}
          />
        </group>
        <group name="arrow_1">
          <mesh
            name="Celling_Projectorprojector_set_GEO1_Celling_Projectorprojecto"
            castShadow
            receiveShadow
            geometry={
              nodes
                .Celling_Projectorprojector_set_GEO1_Celling_Projectorprojecto
                .geometry
            }
            material={materials.Celling_Projectorprojector_metal}
            position={[0.84, 0.28, 1.51]}
            rotation={[-0.01, 0.52, 0]}
          />
        </group>
        <group name="Circle">
          <mesh
            name="Celling_ProjectorCelling_Projector_GEO_Celling_ProjectorLight"
            castShadow
            receiveShadow
            geometry={
              nodes
                .Celling_ProjectorCelling_Projector_GEO_Celling_ProjectorLight
                .geometry
            }
            material={materials.Celling_ProjectorLight_bulb}
          />
          <mesh
            name="Celling_ProjectorCelling_Projector_GEO_Celling_Projectorproje"
            castShadow
            receiveShadow
            geometry={
              nodes
                .Celling_ProjectorCelling_Projector_GEO_Celling_Projectorproje
                .geometry
            }
            material={materials.Celling_Projectorprojector_metal}
          />
        </group>
      </group>
      <group
        name="Ceiling_2"
        position={[1.69, 2.26, 1.45]}
        rotation={[0, 0.4, 0]}
      >
        <mesh
          name="Celling_ProjectorpTorus1_Celling_Projectorholegram_0"
          castShadow
          receiveShadow
          geometry={
            nodes.Celling_ProjectorpTorus1_Celling_Projectorholegram_0.geometry
          }
          material={materials['Celling_Projector:holegram']}
        />
      </group>
      <group name="Chair">
        <group
          name="Table_setChairChair_Base_GEO"
          position={[18.62, 0.04, 5.07]}
          rotation={[0, 1.57, 0]}
          scale={[0.08, 1, 4.91]}
        />
        <group
          name="Table_setChairChair_GEO"
          position={[13.53, 0.29, 6.46]}
          rotation={[0, 0.35, 0]}
          scale={1.24}
        >
          <mesh
            name="Table_setChairChair_GEO_Table_setChairchair_light_0"
            castShadow
            receiveShadow
            geometry={
              nodes.Table_setChairChair_GEO_Table_setChairchair_light_0.geometry
            }
            material={materials.Table_setChairchair_light}
          />
          <mesh
            name="Table_setChairChair_GEO_Table_settable_white_0"
            castShadow
            receiveShadow
            geometry={
              nodes.Table_setChairChair_GEO_Table_settable_white_0.geometry
            }
            material={materials.Table_settable_white}
          />
        </group>
      </group>
      <group name="Desk" position={[1.1, 0, 0]} scale={[0.92, 1, 1]}>
        <group name="Table_setdr_GRP">
          <group name="Table_setTable_GEO10">
            <mesh
              name="Table_setTable_GEO10_Table_settable_white_0"
              castShadow
              receiveShadow
              geometry={
                nodes.Table_setTable_GEO10_Table_settable_white_0.geometry
              }
              material={materials.Table_settable_white}
            />
          </group>
          <group name="Table_setTable_GEO11">
            <mesh
              name="Table_setTable_GEO11_Table_settable_white_0"
              castShadow
              receiveShadow
              geometry={
                nodes.Table_setTable_GEO11_Table_settable_white_0.geometry
              }
              material={materials.Table_settable_white}
            />
          </group>
          <group name="Table_setTable_GEO8">
            <mesh
              name="Table_setTable_GEO8_Table_settable_white_0"
              castShadow
              receiveShadow
              geometry={
                nodes.Table_setTable_GEO8_Table_settable_white_0.geometry
              }
              material={materials.Table_settable_white}
            />
          </group>
        </group>
        <group name="Table_setdr_GRP1" position={[-8.86, 0, 0]}>
          <group name="Table_setTable_GEO10001">
            <mesh
              name="Table_setTable_GEO10_Table_settable_white_0001"
              castShadow
              receiveShadow
              geometry={
                nodes.Table_setTable_GEO10_Table_settable_white_0001.geometry
              }
              material={materials.Table_settable_white}
            />
          </group>
          <group name="Table_setTable_GEO11001">
            <mesh
              name="Table_setTable_GEO11_Table_settable_white_0001"
              castShadow
              receiveShadow
              geometry={
                nodes.Table_setTable_GEO11_Table_settable_white_0001.geometry
              }
              material={materials.Table_settable_white}
            />
          </group>
          <group name="Table_setTable_GEO8001">
            <mesh
              name="Table_setTable_GEO8_Table_settable_white_0001"
              castShadow
              receiveShadow
              geometry={
                nodes.Table_setTable_GEO8_Table_settable_white_0001.geometry
              }
              material={materials.Table_settable_white}
            />
          </group>
        </group>
        <group name="Table_setTable_GEO">
          <mesh
            name="Table_setTable_GEO_Table_settable_white_0"
            castShadow
            receiveShadow
            geometry={nodes.Table_setTable_GEO_Table_settable_white_0.geometry}
            material={materials.Table_settable_white}
          />
        </group>
        <group name="Table_setTable_GEO1">
          <mesh
            name="Table_setTable_GEO1_Table_settable_white_0"
            castShadow
            receiveShadow
            geometry={nodes.Table_setTable_GEO1_Table_settable_white_0.geometry}
            material={materials.Table_settable_white}
          />
        </group>
        <group name="Table_setTable_GEO2">
          <mesh
            name="Table_setTable_GEO2_Table_settable_white_0"
            castShadow
            receiveShadow
            geometry={nodes.Table_setTable_GEO2_Table_settable_white_0.geometry}
            material={materials.Table_settable_white}
          />
        </group>
      </group>
      <group name="Floor_Wall">
        <group name="Pillows">
          <group name="floor_and_wallpillow_GEO">
            <mesh
              name="floor_and_wallpillow_GEO_floor_and_wallbed_sheet_0"
              castShadow
              receiveShadow
              geometry={
                nodes.floor_and_wallpillow_GEO_floor_and_wallbed_sheet_0
                  .geometry
              }
              material={materials.floor_and_wallbed_sheet}
            />
          </group>
          <group name="floor_and_wallpillow_GEO1">
            <mesh
              name="floor_and_wallpillow_GEO1_floor_and_wallbed_sheet_0"
              castShadow
              receiveShadow
              geometry={
                nodes.floor_and_wallpillow_GEO1_floor_and_wallbed_sheet_0
                  .geometry
              }
              material={materials.floor_and_wallbed_sheet}
            />
          </group>
        </group>
        <group name="Wall_Ceiling_Bed">
          <group name="Bed" position={[0, 0, 0.2]}>
            <group name="floor_and_wallbed_GEO">
              <mesh
                name="floor_and_wallbed_GEO_floor_and_wallfan_top_0"
                castShadow
                receiveShadow
                geometry={
                  nodes.floor_and_wallbed_GEO_floor_and_wallfan_top_0.geometry
                }
                material={materials.floor_and_wallfan_top}
              />
            </group>
            <group name="floor_and_wallStairs_GRP" position={[0, 0, 0.01]}>
              <group name="floor_and_wallstairs_GEO">
                <mesh
                  name="floor_and_wallstairs_GEO_floor_and_wallpipe_0"
                  castShadow
                  receiveShadow
                  geometry={
                    nodes.floor_and_wallstairs_GEO_floor_and_wallpipe_0.geometry
                  }
                  material={materials.floor_and_wallpipe}
                />
              </group>
              <group name="floor_and_wallstairs_GEO1">
                <mesh
                  name="floor_and_wallstairs_GEO1_floor_and_wallpipe_0"
                  castShadow
                  receiveShadow
                  geometry={
                    nodes.floor_and_wallstairs_GEO1_floor_and_wallpipe_0
                      .geometry
                  }
                  material={materials.floor_and_wallpipe}
                />
              </group>
              <group name="floor_and_wallstairs_set_GEO">
                <mesh
                  name="floor_and_wallstairs_set_GEO_floor_and_wallpipe_0"
                  castShadow
                  receiveShadow
                  geometry={
                    nodes.floor_and_wallstairs_set_GEO_floor_and_wallpipe_0
                      .geometry
                  }
                  material={materials.floor_and_wallpipe}
                />
              </group>
              <group name="floor_and_wallstairs_set_GEO1">
                <mesh
                  name="floor_and_wallstairs_set_GEO1_floor_and_wallpipe_0"
                  castShadow
                  receiveShadow
                  geometry={
                    nodes.floor_and_wallstairs_set_GEO1_floor_and_wallpipe_0
                      .geometry
                  }
                  material={materials.floor_and_wallpipe}
                />
              </group>
              <group name="floor_and_wallstairs_set_GEO10">
                <mesh
                  name="floor_and_wallstairs_set_GEO10_floor_and_wallpipe_0"
                  castShadow
                  receiveShadow
                  geometry={
                    nodes.floor_and_wallstairs_set_GEO10_floor_and_wallpipe_0
                      .geometry
                  }
                  material={materials.floor_and_wallpipe}
                />
              </group>
              <group name="floor_and_wallstairs_set_GEO2">
                <mesh
                  name="floor_and_wallstairs_set_GEO2_floor_and_wallpipe_0"
                  castShadow
                  receiveShadow
                  geometry={
                    nodes.floor_and_wallstairs_set_GEO2_floor_and_wallpipe_0
                      .geometry
                  }
                  material={materials.floor_and_wallpipe}
                />
              </group>
              <group name="floor_and_wallstairs_set_GEO3">
                <mesh
                  name="floor_and_wallstairs_set_GEO3_floor_and_wallpipe_0"
                  castShadow
                  receiveShadow
                  geometry={
                    nodes.floor_and_wallstairs_set_GEO3_floor_and_wallpipe_0
                      .geometry
                  }
                  material={materials.floor_and_wallpipe}
                />
              </group>
              <group name="floor_and_wallstairs_set_GEO4">
                <mesh
                  name="floor_and_wallstairs_set_GEO4_floor_and_wallpipe_0"
                  castShadow
                  receiveShadow
                  geometry={
                    nodes.floor_and_wallstairs_set_GEO4_floor_and_wallpipe_0
                      .geometry
                  }
                  material={materials.floor_and_wallpipe}
                />
              </group>
              <group name="floor_and_wallstairs_set_GEO5">
                <mesh
                  name="floor_and_wallstairs_set_GEO5_floor_and_wallpipe_0"
                  castShadow
                  receiveShadow
                  geometry={
                    nodes.floor_and_wallstairs_set_GEO5_floor_and_wallpipe_0
                      .geometry
                  }
                  material={materials.floor_and_wallpipe}
                />
              </group>
              <group name="floor_and_wallstairs_set_GEO7">
                <mesh
                  name="floor_and_wallstairs_set_GEO7_floor_and_wallpipe_0"
                  castShadow
                  receiveShadow
                  geometry={
                    nodes.floor_and_wallstairs_set_GEO7_floor_and_wallpipe_0
                      .geometry
                  }
                  material={materials.floor_and_wallpipe}
                />
              </group>
              <group name="floor_and_wallstairs_set_GEO8">
                <mesh
                  name="floor_and_wallstairs_set_GEO8_floor_and_wallpipe_0"
                  castShadow
                  receiveShadow
                  geometry={
                    nodes.floor_and_wallstairs_set_GEO8_floor_and_wallpipe_0
                      .geometry
                  }
                  material={materials.floor_and_wallpipe}
                />
              </group>
              <group name="floor_and_wallstairs_set_GEO9">
                <mesh
                  name="floor_and_wallstairs_set_GEO9_floor_and_wallpipe_0"
                  castShadow
                  receiveShadow
                  geometry={
                    nodes.floor_and_wallstairs_set_GEO9_floor_and_wallpipe_0
                      .geometry
                  }
                  material={materials.floor_and_wallpipe}
                />
              </group>
            </group>
          </group>
          <group name="Ceiling">
            <mesh
              name="floor_and_wallCelling_GEO2_floor_and_wallLight_white_0"
              castShadow
              receiveShadow
              geometry={
                nodes.floor_and_wallCelling_GEO2_floor_and_wallLight_white_0
                  .geometry
              }
              material={materials.custom_wall_3}
              position={[-0.15, 0.14, 0.37]}
            />
            <mesh
              name="floor_and_wallCelling_GEO2_floor_and_wallfan_top_0"
              castShadow
              receiveShadow
              geometry={
                nodes.floor_and_wallCelling_GEO2_floor_and_wallfan_top_0
                  .geometry
              }
              material={materials.floor_and_wallfan_top}
            />
          </group>
          <group name="Ceiling_bed_2">
            <group
              name="floor_and_wallCelling_Light_GEO10"
              position={[-0.28, 0, 13.23]}
            >
              <mesh
                name="floor_and_wallCelling_Light_GEO10_floor_and_wallLight_off_0"
                castShadow
                receiveShadow
                geometry={
                  nodes
                    .floor_and_wallCelling_Light_GEO10_floor_and_wallLight_off_0
                    .geometry
                }
                material={materials.floor_and_wallLight_off}
              />
            </group>
            <group
              name="floor_and_wallCelling_Light_GEO11"
              position={[2.55, 1.22, -4.12]}
              scale={1.19}
            />
            <group
              name="floor_and_wallCelling_Light_GEO12"
              position={[-0.28, 0, 6.66]}
            >
              <mesh
                name="floor_and_wallCelling_Light_GEO12_floor_and_wallLight_off_0"
                castShadow
                receiveShadow
                geometry={
                  nodes
                    .floor_and_wallCelling_Light_GEO12_floor_and_wallLight_off_0
                    .geometry
                }
                material={materials.floor_and_wallLight_off}
              />
            </group>
            <group
              name="floor_and_wallCelling_Light_GEO13"
              position={[-0.28, 0, 0.05]}
            >
              <mesh
                name="floor_and_wallCelling_Light_GEO13_floor_and_wallLight_off_0"
                castShadow
                receiveShadow
                geometry={
                  nodes
                    .floor_and_wallCelling_Light_GEO13_floor_and_wallLight_off_0
                    .geometry
                }
                material={materials.floor_and_wallLight_off}
              />
            </group>
            <group
              name="floor_and_wallCelling_Light_GEO14"
              position={[-0.28, 0, -6.49]}
            >
              <mesh
                name="floor_and_wallCelling_Light_GEO14_floor_and_wallLight_off_0"
                castShadow
                receiveShadow
                geometry={
                  nodes
                    .floor_and_wallCelling_Light_GEO14_floor_and_wallLight_off_0
                    .geometry
                }
                material={materials.floor_and_wallLight_off}
              />
            </group>
            <group
              name="floor_and_wallCelling_Light_GEO4"
              position={[-0.24, 0, 0]}
            >
              <mesh
                name="floor_and_wallCelling_Light_GEO4_floor_and_wallLight_off_0"
                castShadow
                receiveShadow
                geometry={
                  nodes
                    .floor_and_wallCelling_Light_GEO4_floor_and_wallLight_off_0
                    .geometry
                }
                material={materials.floor_and_wallLight_off}
              />
            </group>
            <group
              name="floor_and_wallCelling_Light_GEO5"
              position={[-0.24, 0, 0]}
            >
              <mesh
                name="floor_and_wallCelling_Light_GEO5_floor_and_wallLight_off_0"
                castShadow
                receiveShadow
                geometry={
                  nodes
                    .floor_and_wallCelling_Light_GEO5_floor_and_wallLight_off_0
                    .geometry
                }
                material={materials.floor_and_wallLight_off}
              />
            </group>
            <group
              name="floor_and_wallCelling_Light_GEO6"
              position={[-0.19, 0, 0]}
            >
              <mesh
                name="floor_and_wallCelling_Light_GEO6_floor_and_wallLight_off_0"
                castShadow
                receiveShadow
                geometry={
                  nodes
                    .floor_and_wallCelling_Light_GEO6_floor_and_wallLight_off_0
                    .geometry
                }
                material={materials.floor_and_wallLight_off}
              />
            </group>
            <group name="floor_and_wallCelling_Light_GEO7">
              <mesh
                name="floor_and_wallCelling_Light_GEO7_floor_and_wallLight_off_0"
                castShadow
                receiveShadow
                geometry={
                  nodes
                    .floor_and_wallCelling_Light_GEO7_floor_and_wallLight_off_0
                    .geometry
                }
                material={materials.floor_and_wallLight_off}
              />
            </group>
            <group
              name="floor_and_wallCelling_Light_GEO8"
              position={[-0.18, 0, 0]}
            >
              <mesh
                name="floor_and_wallCelling_Light_GEO8_floor_and_wallLight_off_0"
                castShadow
                receiveShadow
                geometry={
                  nodes
                    .floor_and_wallCelling_Light_GEO8_floor_and_wallLight_off_0
                    .geometry
                }
                material={materials.floor_and_wallLight_off}
              />
            </group>
          </group>
          <group name="Fan">
            <group
              name="floor_and_wallFan_In_GRP"
              position={[-2.38, 7.18, 2.71]}
            >
              <group name="floor_and_wallFan_GEO001" position={[0, 0.73, 0.26]}>
                <mesh
                  name="floor_and_wallFan_GEO_floor_and_wallfan_top_0001"
                  castShadow
                  receiveShadow
                  geometry={
                    nodes.floor_and_wallFan_GEO_floor_and_wallfan_top_0001
                      .geometry
                  }
                  material={materials.custom_wall_2}
                />
              </group>
              <group
                name="floor_and_wallFan_GEO1001"
                position={[0, 0.26, -0.74]}
              >
                <mesh
                  name="floor_and_wallFan_GEO1_floor_and_wallfan_top_0001"
                  castShadow
                  receiveShadow
                  geometry={
                    nodes.floor_and_wallFan_GEO1_floor_and_wallfan_top_0001
                      .geometry
                  }
                  material={materials.custom_wall_2}
                />
              </group>
              <group
                name="floor_and_wallFan_GEO2001"
                position={[0, -0.72, -0.28]}
              >
                <mesh
                  name="floor_and_wallFan_GEO2_floor_and_wallfan_top_0001"
                  castShadow
                  receiveShadow
                  geometry={
                    nodes.floor_and_wallFan_GEO2_floor_and_wallfan_top_0001
                      .geometry
                  }
                  material={materials.custom_wall_2}
                />
              </group>
              <group
                name="floor_and_wallFan_GEO3001"
                position={[0, -0.25, 0.73]}
              >
                <mesh
                  name="floor_and_wallFan_GEO3_floor_and_wallfan_top_0001"
                  castShadow
                  receiveShadow
                  geometry={
                    nodes.floor_and_wallFan_GEO3_floor_and_wallfan_top_0001
                      .geometry
                  }
                  material={materials.custom_wall_2}
                />
              </group>
            </group>
            <group
              name="floor_and_wallFan_In_GRP1"
              position={[-2.38, 7.17, 8.99]}
            >
              <group name="floor_and_wallFan_GEO" position={[0, 0.55, 0.55]}>
                <mesh
                  name="floor_and_wallFan_GEO_floor_and_wallfan_top_0"
                  castShadow
                  receiveShadow
                  geometry={
                    nodes.floor_and_wallFan_GEO_floor_and_wallfan_top_0.geometry
                  }
                  material={materials.custom_wall_2}
                />
              </group>
              <group name="floor_and_wallFan_GEO1" position={[0, 0.55, -0.56]}>
                <mesh
                  name="floor_and_wallFan_GEO1_floor_and_wallfan_top_0"
                  castShadow
                  receiveShadow
                  geometry={
                    nodes.floor_and_wallFan_GEO1_floor_and_wallfan_top_0
                      .geometry
                  }
                  material={materials.custom_wall_2}
                />
              </group>
              <group name="floor_and_wallFan_GEO2" position={[0, -0.53, -0.56]}>
                <mesh
                  name="floor_and_wallFan_GEO2_floor_and_wallfan_top_0"
                  castShadow
                  receiveShadow
                  geometry={
                    nodes.floor_and_wallFan_GEO2_floor_and_wallfan_top_0
                      .geometry
                  }
                  material={materials.custom_wall_2}
                />
              </group>
              <group name="floor_and_wallFan_GEO3" position={[0, -0.53, 0.55]}>
                <mesh
                  name="floor_and_wallFan_GEO3_floor_and_wallfan_top_0"
                  castShadow
                  receiveShadow
                  geometry={
                    nodes.floor_and_wallFan_GEO3_floor_and_wallfan_top_0
                      .geometry
                  }
                  material={materials.custom_wall_2}
                />
              </group>
            </group>
            <group name="floor_and_wallbed_top_GEO1">
              <mesh
                name="custom_wall_1"
                castShadow
                receiveShadow
                geometry={nodes.custom_wall_1.geometry}
                material={materials.custom_wall_1}
              />
              <mesh
                name="floor_and_wallbed_top_GEO1_floor_and_wallLight_white_0"
                castShadow
                receiveShadow
                geometry={
                  nodes.floor_and_wallbed_top_GEO1_floor_and_wallLight_white_0
                    .geometry
                }
                material={materials.material_0}
              />
            </group>
            <group name="floor_and_wallFan_center_GEO">
              <mesh
                name="floor_and_wallFan_center_GEO_floor_and_wallfan_top_0"
                castShadow
                receiveShadow
                geometry={
                  nodes.floor_and_wallFan_center_GEO_floor_and_wallfan_top_0
                    .geometry
                }
                material={materials.custom_wall_2}
              />
            </group>
            <group name="floor_and_wallFan_center_GEO1">
              <mesh
                name="floor_and_wallFan_center_GEO1_floor_and_wallfan_top_0"
                castShadow
                receiveShadow
                geometry={
                  nodes.floor_and_wallFan_center_GEO1_floor_and_wallfan_top_0
                    .geometry
                }
                material={materials.custom_wall_2}
              />
            </group>
            <group name="floor_and_wallFan_set_GEO10">
              <mesh
                name="floor_and_wallFan_set_GEO10_floor_and_wallfan_top_0"
                castShadow
                receiveShadow
                geometry={
                  nodes.floor_and_wallFan_set_GEO10_floor_and_wallfan_top_0
                    .geometry
                }
                material={materials.custom_wall_2}
              />
            </group>
            <group name="floor_and_wallFan_set_GEO11">
              <mesh
                name="floor_and_wallFan_set_GEO11_floor_and_wallfan_top_0"
                castShadow
                receiveShadow
                geometry={
                  nodes.floor_and_wallFan_set_GEO11_floor_and_wallfan_top_0
                    .geometry
                }
                material={materials.custom_wall_2}
              />
            </group>
            <group name="floor_and_wallFan_set_GEO2">
              <mesh
                name="floor_and_wallFan_set_GEO2_floor_and_wallfan_top_0"
                castShadow
                receiveShadow
                geometry={
                  nodes.floor_and_wallFan_set_GEO2_floor_and_wallfan_top_0
                    .geometry
                }
                material={materials.custom_wall_2}
              />
            </group>
            <group name="floor_and_wallFan_set_GEO3">
              <mesh
                name="floor_and_wallFan_set_GEO3_floor_and_wallfan_top_0"
                castShadow
                receiveShadow
                geometry={
                  nodes.floor_and_wallFan_set_GEO3_floor_and_wallfan_top_0
                    .geometry
                }
                material={materials.custom_wall_2}
              />
            </group>
            <group name="floor_and_wallFan_set_GEO4">
              <mesh
                name="floor_and_wallFan_set_GEO4_floor_and_wallfan_top_0"
                castShadow
                receiveShadow
                geometry={
                  nodes.floor_and_wallFan_set_GEO4_floor_and_wallfan_top_0
                    .geometry
                }
                material={materials.custom_wall_2}
              />
            </group>
            <group name="floor_and_wallFan_set_GEO5">
              <mesh
                name="floor_and_wallFan_set_GEO5_floor_and_wallfan_top_0"
                castShadow
                receiveShadow
                geometry={
                  nodes.floor_and_wallFan_set_GEO5_floor_and_wallfan_top_0
                    .geometry
                }
                material={materials.custom_wall_2}
              />
            </group>
            <group name="floor_and_wallFan_set_GEO6">
              <mesh
                name="floor_and_wallFan_set_GEO6_floor_and_wallfan_top_0"
                castShadow
                receiveShadow
                geometry={
                  nodes.floor_and_wallFan_set_GEO6_floor_and_wallfan_top_0
                    .geometry
                }
                material={materials.custom_wall_2}
              />
            </group>
            <group name="floor_and_wallFan_set_GEO7">
              <mesh
                name="floor_and_wallFan_set_GEO7_floor_and_wallfan_top_0"
                castShadow
                receiveShadow
                geometry={
                  nodes.floor_and_wallFan_set_GEO7_floor_and_wallfan_top_0
                    .geometry
                }
                material={materials.custom_wall_2}
              />
            </group>
            <group name="floor_and_wallFan_set_GEO8">
              <mesh
                name="floor_and_wallFan_set_GEO8_floor_and_wallfan_top_0"
                castShadow
                receiveShadow
                geometry={
                  nodes.floor_and_wallFan_set_GEO8_floor_and_wallfan_top_0
                    .geometry
                }
                material={materials.custom_wall_2}
              />
            </group>
            <group name="floor_and_wallFan_set_GEO9">
              <mesh
                name="floor_and_wallFan_set_GEO9_floor_and_wallfan_top_0"
                castShadow
                receiveShadow
                geometry={
                  nodes.floor_and_wallFan_set_GEO9_floor_and_wallfan_top_0
                    .geometry
                }
                material={materials.custom_wall_2}
              />
            </group>
          </group>
          <group name="Wall">
            <mesh
              name="wall_east"
              castShadow
              receiveShadow
              geometry={nodes.wall_east.geometry}
              material={materials.custom_wall_3}
              position={[4.6, 0, -0.54]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[1.06, 1, 0.71]}
            />
            <mesh
              name="wall_north"
              castShadow
              receiveShadow
              geometry={nodes.wall_north.geometry}
              material={materials['custom_wall_3.001']}
              position={[-23.19, -0.02, -11.34]}
              rotation={[-Math.PI, 0, -Math.PI]}
            />
          </group>
        </group>
      </group>
      <group
        name="Sofa"
        position={[-21.88, 12.99, -24.92]}
        rotation={[0, -0.59, 0]}
        scale={[0.5, 3.38, 0.5]}
      >
        <group name="SofaSofa1_GEO">
          <mesh
            name="SofaSofa1_GEO_Sofasofa_0"
            castShadow
            receiveShadow
            geometry={nodes.SofaSofa1_GEO_Sofasofa_0.geometry}
            material={materials.Sofasofa}
            position={[-8.96, 0, 7.19]}
          />
        </group>
        <group name="SofaSOFA2_GEO" position={[-8.96, 0, 7.19]}>
          <mesh
            name="SofaSOFA2_GEO_Sofasofa_0"
            castShadow
            receiveShadow
            geometry={nodes.SofaSOFA2_GEO_Sofasofa_0.geometry}
            material={materials.Sofasofa}
          />
        </group>
        <group name="SofaSOFA3_GEO" position={[-8.96, 0, 7.19]}>
          <mesh
            name="SofaSOFA3_GEO_Sofasofa_0"
            castShadow
            receiveShadow
            geometry={nodes.SofaSOFA3_GEO_Sofasofa_0.geometry}
            material={materials.Sofasofa}
          />
        </group>
        <group name="SofaSOFA4_GEO" position={[-8.96, 0, 7.19]}>
          <mesh
            name="SofaSOFA4_GEO_Sofasofa_0"
            castShadow
            receiveShadow
            geometry={nodes.SofaSOFA4_GEO_Sofasofa_0.geometry}
            material={materials.Sofasofa}
          />
        </group>
        <group name="SofaSOFA5_GEO" position={[-8.96, 0, 7.19]}>
          <mesh
            name="SofaSOFA5_GEO_Sofasofa_0"
            castShadow
            receiveShadow
            geometry={nodes.SofaSOFA5_GEO_Sofasofa_0.geometry}
            material={materials.Sofasofa}
          />
        </group>
        <group name="SofaSOFA6_GEO" position={[-8.96, 0, 7.19]}>
          <mesh
            name="SofaSOFA6_GEO_Sofasofa_0"
            castShadow
            receiveShadow
            geometry={nodes.SofaSOFA6_GEO_Sofasofa_0.geometry}
            material={materials.Sofasofa}
          />
        </group>
        <group name="SofaSofa_base_GEO" position={[-8.96, 0, 7.19]}>
          <mesh
            name="SofaSofa_base_GEO_Sofasofa_0"
            castShadow
            receiveShadow
            geometry={nodes.SofaSofa_base_GEO_Sofasofa_0.geometry}
            material={materials.Sofasofa}
          />
        </group>
      </group>
      <group name="tv">
        <group name="Monitor_and_small_assetsMonitor_and_small_assets_GRP">
          <group
            name="Monitor_and_small_assetsMonitor_GEO"
            position={[1.24, 0, 3.72]}
            scale={[0.96, 1, 0.67]}
          >
            <mesh
              name="Monitor_and_small_assetsMonitor_GEO_Monitor_and_small_assetsM"
              castShadow
              receiveShadow
              geometry={
                nodes
                  .Monitor_and_small_assetsMonitor_GEO_Monitor_and_small_assetsM
                  .geometry
              }
              material={materials.Monitor_and_small_assetsMonitor_Black}
            />
          </group>
          <group
            name="Monitor_and_small_assetsMonitor_GEO1"
            position={[1.39, 0.15, 3.98]}
            scale={[0.92, 0.97, 0.65]}
          >
            <mesh
              name="Monitor_and_small_assetsMonitor_GEO1_Monitor_and_small_assets"
              castShadow
              receiveShadow
              geometry={
                nodes
                  .Monitor_and_small_assetsMonitor_GEO1_Monitor_and_small_assets
                  .geometry
              }
              material={materials.Monitor_and_small_assetsJOI}
            />
          </group>
        </group>
      </group>
    </group>
  );
};
