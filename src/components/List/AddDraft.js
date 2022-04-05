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


// SCSS
// scss Page Ajouter un item
.add {
  margin-bottom: vars.$marginBottom;
  width: 800px;
  margin: auto;
  color: vars.$lightColor;
  text-align: center;

  &-modTitle {
    font-weight: bold;
    margin-bottom: vars.$marginBottom;
  }

  &-modSubtitle {
    font-size: 1.3rem;
    font-weight: normal;
    margin-bottom: vars.$marginBottom;
  }
  
  &-search {
    margin-bottom: 5rem;

    &-bar {
      .ui.input>input {
        background-color: vars.$secondaryColor;
      }
    }
  }

  &-reco {
    &-cardGroup {
      border-radius: vars.$borderRadius;
      padding: 2rem;

      &-card {
        position: relative;
        background-color: vars.$secondaryColor!important;

        &-button {
          position: absolute;
          top: -0.5rem;
          left: -0.5rem;
          z-index: 1;

          width: 2rem!important;
          padding: 0.5rem!important;
        }

        .card-content {
          color: vars.$lightColor!important;

          .card-tag {
            margin-top: .5rem;
          }
        }
      }
    }
  }
}
