// Equipment photo mapping based on ATDB_real_photo_mapping.csv
export interface EquipmentPhoto {
  filename: string;
  equipmentId: string;
  equipmentName: string;
  category: string;
  order: number;
}

export const equipmentPhotos: EquipmentPhoto[] = [
  // Cranes
  {
    filename: "Liebherr LTM 1070-4.1.jpeg",
    equipmentId: "ATDB-CR-002",
    equipmentName: "Liebherr LTM 1070-4.1",
    category: "cranes",
    order: 1
  },
  {
    filename: "Liebherr LTM 1070-4.1(2).jpeg",
    equipmentId: "ATDB-CR-002",
    equipmentName: "Liebherr LTM 1070-4.1",
    category: "cranes",
    order: 2
  },
  
  // Excavators
  {
    filename: "Caterpillar 320BU CHAIN WHEEL ENGINE NO 1910599.jpeg",
    equipmentId: "ATDB-EX-002",
    equipmentName: "CAT 320BU Excavator",
    category: "excavators",
    order: 1
  },
  {
    filename: "Caterpillar 320BU CHAIN WHEEL ENGINE NO 1910599 2.jpeg",
    equipmentId: "ATDB-EX-002",
    equipmentName: "CAT 320BU Excavator",
    category: "excavators",
    order: 2
  },
  
  // Road Rollers
  {
    filename: "Dynapac cc20 SI 489759.jpeg",
    equipmentId: "ATDB-RR-004",
    equipmentName: "Dynapac CC20 Double Drum",
    category: "rollers",
    order: 1
  },
  {
    filename: "Dynapac cc20 SI 489759 2.jpeg",
    equipmentId: "ATDB-RR-004",
    equipmentName: "Dynapac CC20 Double Drum",
    category: "rollers",
    order: 2
  },
  {
    filename: "Bomag BW121 A C SI 212818.jpeg",
    equipmentId: "ATDB-RR-005",
    equipmentName: "Bomag BW Tandem Vibratory",
    category: "rollers",
    order: 1
  },
  {
    filename: "Bomag BW121 AC 20 SI  212818 2.jpeg",
    equipmentId: "ATDB-RR-005",
    equipmentName: "Bomag BW Tandem Vibratory",
    category: "rollers",
    order: 2
  },
  {
    filename: "Sakai_Model -HV 60ST SI-VHV12-42135.jpeg",
    equipmentId: "ATDB-RR-008",
    equipmentName: "Sakai HV60 Mini Tandem",
    category: "rollers",
    order: 1
  },
  {
    filename: "Sakai_Model -HV 60ST SI-VHV12-42135 2.jpeg",
    equipmentId: "ATDB-RR-008",
    equipmentName: "Sakai HV60 Mini Tandem",
    category: "rollers",
    order: 2
  },
  {
    filename: "8 rr sakai.jpeg",
    equipmentId: "ATDB-RR-008",
    equipmentName: "Sakai HV60 Mini Tandem",
    category: "rollers",
    order: 3
  },
  
  // Loaders & Backhoes
  {
    filename: "14 CASE.jpeg",
    equipmentId: "ATDB-LD-001",
    equipmentName: "CASE 770EX Magnum Backhoe",
    category: "loaders",
    order: 1
  },
  
  // Support Equipment
  {
    filename: "sand compactor rammer hammer honda 80k 100.jpeg",
    equipmentId: "ATDB-SP-004",
    equipmentName: "Honda 80k-100 Sand Compactor",
    category: "support",
    order: 1
  },
  {
    filename: "sand honda rammer 80k 100 2.jpeg",
    equipmentId: "ATDB-SP-004",
    equipmentName: "Honda 80k-100 Sand Compactor",
    category: "support",
    order: 2
  },
  {
    filename: "compactor 80k 100 3.jpeg",
    equipmentId: "ATDB-SP-004",
    equipmentName: "Honda 80k-100 Sand Compactor",
    category: "support",
    order: 3
  },
  {
    filename: "generator and big drill hammer.jpeg",
    equipmentId: "ATDB-SP-005",
    equipmentName: "Honda ER2500CX Generator",
    category: "support",
    order: 1
  }
];

export function getPhotosByEquipmentId(equipmentId: string): EquipmentPhoto[] {
  return equipmentPhotos.filter(photo => photo.equipmentId === equipmentId);
}

export function getPhotoUrl(filename: string): string {
  return `/real-equipment-photos/${encodeURIComponent(filename)}`;
}
