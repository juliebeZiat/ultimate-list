import {
  Card,
  Search,
  Image,
  Button,
} from 'semantic-ui-react';

const Add = () => (
  <div className="add">
    <h1 className="add-modTitle">Jeux vidéo</h1>
    <div className="add-search">
      <h2 className="add-modSubtitle">Ajouter un jeu vidéo</h2>
      <Search
        className="add-search-bar"
        placeholder="Assassin's Creed, Elden Ring, God of War..."
        input={{
          fluid: true,
          iconPosition: 'left',
        }}
      />
    </div>

    <div className="add-reco">
      <h2 className="add-modSubtitle">Nos recommandations pour toi</h2>
      <Card.Group
        className="add-reco-cardGroup"
        itemsPerRow={4}
      >
        <Card className="add-reco-cardGroup-card">
          <Button
            className="add-reco-cardGroup-card-button"
            icon="plus"
          />
          <Image src="https://picsum.photos/200/200" />
          <Card.Content>
            <Card.Header>
              Titre du jeu
            </Card.Header>

            <Card.Meta>
              Info supplémentaire
            </Card.Meta>

            <Card.Description>
              Description du jeu
            </Card.Description>
          </Card.Content>
        </Card>

        <Card>
          <Image src="https://picsum.photos/200/200" />
          <Card.Content>
            <Card.Header>
              Titre du jeu
            </Card.Header>

            <Card.Meta>
              Info supplémentaire
            </Card.Meta>

            <Card.Description>
              Description du jeu
            </Card.Description>
          </Card.Content>
        </Card>

        <Card>
          <Image src="https://picsum.photos/200/200" />
          <Card.Content>
            <Card.Header>
              Titre du jeu
            </Card.Header>

            <Card.Meta>
              Info supplémentaire
            </Card.Meta>

            <Card.Description>
              Description du jeu
            </Card.Description>
          </Card.Content>
        </Card>

        <Card>
          <Image src="https://picsum.photos/200/200" />
          <Card.Content>
            <Card.Header>
              Titre du jeu
            </Card.Header>

            <Card.Meta>
              Info supplémentaire
            </Card.Meta>

            <Card.Description>
              Description du jeu
            </Card.Description>
          </Card.Content>
        </Card>

      </Card.Group>
    </div>
  </div>
);

// == Export
export default Add;
