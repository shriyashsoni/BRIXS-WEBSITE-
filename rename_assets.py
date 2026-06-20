import os
import shutil
import re

base_dir = r"e:\chain\brixs chain main mwebsite\3D motions website folders"

# Mapping of model ID to descriptive names
names_mapping = {
    1: "LayeredBlockchainRings",
    2: "CoreProcessingWheel",
    3: "WireframeOctagonPortal",
    4: "OrbitalNodeSatellite",
    5: "DataPyramidZiggurat",
    6: "SplitCoreSphere",
    7: "LayeredBlockchainRingsAlt",
    8: "DecentralizedNodesFloating",
    9: "ConcentricOrbitRings",
    10: "FloatingDataCubes",
    11: "SpikyCrystalCore",
    12: "EmptyStateTransition",
    13: "TechnicalDnaHelix",
    14: "BrixsCoreCubeCluster",
    15: "StarburstHexagonCore",
    16: "CrystalShardsExplosion",
    17: "StardustVoid",
    18: "GeometricNetworkNodes",
    19: "VoidState",
    20: "DataBusArray",
    21: "BrixsDarkCubeLogo",
    22: "FaintDebris",
    23: "FloatingCubes",
    24: "WireframeCubeCluster",
    25: "EmptyVoidAlt",
    26: "ExplodingGeometricShapes",
    27: "FaintVoidAlt",
    28: "AbstractDarkObjects",
    29: "EmptyVoidAltTwo",
    30: "AbstractNodesConnections",
    31: "BrixsHypercubeWireframe"
}

def to_snake_case(name):
    s1 = re.sub('(.)([A-Z][a-z]+)', r'\1_\2', name)
    return re.sub('([a-z0-9])([A-Z])', r'\1_\2', s1).lower()

for i in range(1, 32):
    old_folder_name = f"model-{i}"
    old_folder_path = os.path.join(base_dir, old_folder_name)
    
    if i not in names_mapping:
        continue
        
    new_folder_name = names_mapping[i]
    new_folder_path = os.path.join(base_dir, new_folder_name)
    
    snake_name = to_snake_case(new_folder_name)
    
    if os.path.exists(old_folder_path):
        print(f"Renaming {old_folder_name} to {new_folder_name}...")
        os.rename(old_folder_path, new_folder_path)
    elif os.path.exists(new_folder_path):
        print(f"Folder {new_folder_name} already exists. Proceeding to rename frames...")
    else:
        print(f"Warning: Neither {old_folder_path} nor {new_folder_path} exists.")
        continue
        
    # Rename frames inside
    for filename in os.listdir(new_folder_path):
        if filename.endswith(".webp") and filename.startswith("frame_"):
            # Extract frame number, assuming frame_XXXX.webp
            parts = filename.split('_')
            if len(parts) == 2:
                frame_number = parts[1]
                new_filename = f"{snake_name}_{frame_number}"
                old_file_path = os.path.join(new_folder_path, filename)
                new_file_path = os.path.join(new_folder_path, new_filename)
                os.rename(old_file_path, new_file_path)
            
print("Renaming complete!")
