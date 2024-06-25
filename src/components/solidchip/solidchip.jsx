export default function SolidChip({removeChip, chipIndex}) {
    return (
          <Chip
            avatar={<img src={chipImage} alt="" />}
            label="Solid"
            onClose={handleSolid}
            show={showSolid}
            variant="solid"
            type="input"
            className="mr-2"
          ></Chip>
    );
}