import React from 'react';
import RemoteAccess from 'doover_home/RemoteAccess';
import { ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

export default class DooverTables extends RemoteAccess {
    constructor(props) {
        super(props);
        this.state = {
            imageUrl: '',
            isLoading: true,
            error: null
        };
    }

    componentDidMount() {
        // Get the image URL from props or UI state
        const imageUrl = this.props.imageUrl || this.getUiState()?.reported?.image_url || '';
        
        if (imageUrl) {
            this.setState({
                imageUrl: imageUrl,
                isLoading: false
            });
        } else {
            this.setState({
                error: 'No image URL provided',
                isLoading: false
            });
        }
    }

    getMaxHeight() {
      const uiState = this.getUiState();
      if (uiState?.reported?.max_height) {
        return uiState.reported.max_height;
      }
      return '200px';
    }

    render() {
        const { imageUrl, isLoading, error } = this.state;
        var height = this.getMaxHeight();

        return (
            <ThemeProvider theme={this.getTheme()}>
                <Box 
                    width="95%"
                    margin="auto"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    maxHeight={height}
                >
                    {isLoading && (
                        <Typography>Loading...</Typography>
                    )}
                    
                    {error && (
                        <Typography color="error">{error}</Typography>
                    )}
                    
                    {!isLoading && !error && imageUrl && (
                        <img 
                            src={imageUrl}
                            alt="Remote component image"
                            style={{
                                maxWidth: '100%',
                                maxHeight: '100%',
                                objectFit: 'contain'
                            }}
                            onError={() => this.setState({ error: 'Failed to load image' })}
                        />
                    )}
                </Box>
            </ThemeProvider>
        );
    }
}