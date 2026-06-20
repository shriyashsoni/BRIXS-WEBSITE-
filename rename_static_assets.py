import os

directory = r"e:\chain\brixs chain main mwebsite\3d Website Architectures designs in look in PNG"

renames = {
    "3D_architectural_asset__Abstract_white_202606192025.jpeg": "Brixs_Core_Data_Crystal.jpeg",
    "3D_architectural_asset__Abstract_white_202606192032.jpeg": "Floating_Polygonal_Rings.jpeg",
    "3D_architectural_asset__Abstract_white_202606192033 (1).jpeg": "Glowing_Hexagonal_Tunnel_Grid.jpeg",
    "3D_architectural_asset__Abstract_white_202606192033 (2).jpeg": "Futuristic_Cityscape_Module.jpeg",
    "3D_architectural_asset__Abstract_white_202606192033 (3).jpeg": "Brixs_Data_Prism_Core.jpeg",
    "3D_architectural_asset__Abstract_white_202606192033 (4).jpeg": "Fragmented_Prism_Core.jpeg",
    "3D_architectural_asset__Abstract_white_202606192033.jpeg": "Geometric_Wireframe_Knot.jpeg",
    "3D_architectural_asset__Abstract_white_202606192034 (1).jpeg": "Layered_Octagonal_Tower.jpeg",
    "3D_architectural_asset__Abstract_white_202606192034 (2).jpeg": "White_Polygon_Swarm.jpeg",
    "3D_architectural_asset__Abstract_white_202606192034 (3).jpeg": "Brixs_Hexagonal_Ring_Station.jpeg",
    "3D_architectural_asset__Abstract_white_202606192034 (4).jpeg": "Brixs_Hexagonal_Ring_Station_Variant.jpeg",
    "3D_architectural_asset__Abstract_white_202606192034 (5).jpeg": "Complex_Cubic_Vortex.jpeg",
    "3D_architectural_asset__Abstract_white_202606192034.jpeg": "Interlocking_Cuboid_Structure.jpeg",
    "3D_architectural_asset__Abstract_white_202606192035 (1).jpeg": "Brixs_Tech_Pillar_Grid.jpeg",
    "3D_architectural_asset__Abstract_white_202606192035 (2).jpeg": "Brixs_Tech_Pillar_Grid_Alt.jpeg",
    "3D_architectural_asset__Abstract_white_202606192035.jpeg": "Asymmetric_Building_Block.jpeg",
    
    "3D_architectural_asset__Floating_cluster_202606192033.jpeg": "Floating_Cubic_Data_Cluster.jpeg",
    "3D_architectural_asset__Floating_white_202606192033 (1).jpeg": "Orbiting_Cubes_Network.jpeg",
    "3D_architectural_asset__Floating_white_202606192033 (2).jpeg": "Orbiting_Cubes_Network_Alt.jpeg",
    "3D_architectural_asset__Floating_white_202606192033 (3).jpeg": "Brixs_Hexagonal_Platform_Array.jpeg",
    "3D_architectural_asset__Floating_white_202606192033.jpeg": "Brixs_Fragmented_Cubic_Data_Core.jpeg",
    "3D_architectural_asset__Floating_white_202606192034 (1).jpeg": "Brixs_Orbital_Satellite_Station.jpeg",
    "3D_architectural_asset__Floating_white_202606192034 (2).jpeg": "Geometric_Hourglass_Prism.jpeg",
    "3D_architectural_asset__Floating_white_202606192034 (3).jpeg": "Glowing_Hexagonal_Starburst.jpeg",
    "3D_architectural_asset__Floating_white_202606192034 (4).jpeg": "Spiky_Crystal_Core_Starburst.jpeg",
    "3D_architectural_asset__Floating_white_202606192034.jpeg": "Brixs_Floating_Pyramid_Swarm.jpeg",
    "3D_architectural_asset__Floating_white_202606192035.jpeg": "Brixs_GD1_Recon_Drone.jpeg",
    
    "3D_architectural_asset__Futuristic_white_202606192033.jpeg": "Futuristic_Obelisk_Monument.jpeg",
    "3D_architectural_asset__Futuristic_white_202606192034.jpeg": "Crystalline_Obelisk_Gem.jpeg",
    "3D_architectural_asset__Futuristic_white_202606192035.jpeg": "Hexagonal_Platform_Spire_Tower.jpeg",
    
    "3D_architectural_asset__Minimalist_white_202606192033 (1).jpeg": "Brixs_Stacked_Data_Cubes_Terminal.jpeg",
    "3D_architectural_asset__Minimalist_white_202606192033.jpeg": "Hexagonal_Plated_Sphere.jpeg",
    "3D_architectural_asset__Minimalist_white_202606192034 (1).jpeg": "Industrial_Data_Gear.jpeg",
    "3D_architectural_asset__Minimalist_white_202606192034 (2).jpeg": "Brixs_Cubic_Architecture_Complex.jpeg",
    "3D_architectural_asset__Minimalist_white_202606192034.jpeg": "Brixs_Wireframe_Intersecting_Cubes.jpeg",
    "3D_architectural_asset__Minimalist_white_202606192035.jpeg": "Octagonal_Turbine_Fan.jpeg",
    
    "3D_geometric_primitive_asset_for_202606192025.jpeg": "Brixs_Trio_Fragmented_Cubes.jpeg",
    "3D_geometric_primitive_asset_for_202606192031.jpeg": "Brixs_Trio_Fragmented_Cubes_Alt.jpeg",
    
    "3D_model_design_reference__AI_202606192025.jpeg": "Brixs_Agent_Node_Fractal_Sphere.jpeg",
    "3D_model_design_reference__AI_202606192032.jpeg": "Brixs_Agent_Node_Fractal_Sphere_Alt.jpeg",
    "3D_model_design_reference__Zero-Gas_202606192025.jpeg": "Brixs_Zero_Gas_Portal.jpeg",
    
    "Abstract_3D_architectural_asset_representing_202606192025.jpeg": "Floating_Rings_Data_Column.jpeg",
    "Abstract_3D_architectural_asset_representing_202606192032.jpeg": "Floating_Rings_Data_Column_Alt.jpeg",
    
    "Sleek,_futuristic_3D_architectural_asset._202606192025.jpeg": "Brixs_Secure_Node_Block.jpeg",
    "Sleek,_futuristic_3D_architectural_asset._202606192032.jpeg": "Brixs_Secure_Node_Block_Alt.jpeg",
}

renamed_count = 0
not_found_count = 0

for old_name, new_name in renames.items():
    old_path = os.path.join(directory, old_name)
    new_path = os.path.join(directory, new_name)
    
    if os.path.exists(old_path):
        os.rename(old_path, new_path)
        print(f"Renamed: {old_name} -> {new_name}")
        renamed_count += 1
    else:
        print(f"File not found: {old_name}")
        not_found_count += 1

print(f"\nSummary:")
print(f"Renamed: {renamed_count} files.")
print(f"Not found: {not_found_count} files.")
