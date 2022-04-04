import {
  Grid,
  Card,
  Search,
  Image,
  Button,
  Icon,
  Label,
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
      <Grid
        className="add-reco-cardGroup"
        columns={4}
        doubling
      >

        <Grid.Column>
          <Card className="add-reco-cardGroup-card" centered>
            <Button
              className="add-reco-cardGroup-card-button"
              icon
              circular
            >
              <Icon name="plus circle" />
            </Button>
            <Image src="https://picsum.photos/200/200" />
            <Card.Content
              className="card-content"
              textAlign="left"
            >
              <Card.Header>
                Titre du jeu
              </Card.Header>

              <Card.Meta>
                Info supplémentaire
              </Card.Meta>

              <Card.Description>
                Description du jeu
              </Card.Description>

              <Label
                className="card-tag"
                color="teal"
              >
                TAG
              </Label>
            </Card.Content>
          </Card>
        </Grid.Column>

        <Grid.Column>
          <Card className="add-reco-cardGroup-card" centered>
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
        </Grid.Column>

        <Grid.Column>
          <Card className="add-reco-cardGroup-card" centered>
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
        </Grid.Column>

        <Grid.Column>
          <Card className="add-reco-cardGroup-card" centered>
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
        </Grid.Column>

        <Grid.Column>
          <Card className="add-reco-cardGroup-card" centered>
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
        </Grid.Column>

      </Grid>

    </div>
  </div>
);

// == Export
export default Add;
