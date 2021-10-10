---
layout: post
title:  K-Means Clustering - Diney Films
date:   2021-10-08 12:01:35 +0300
image:  02.jpg
tags:   Resources
---

# -*- coding: utf-8 -*-

# -- Sheet --

#import key libraries
import pandas as pd
import numpy as np
import seaborn as sns
import matplotlib.pyplot as plt
import plotly as py
import plotly.express as px
from sklearn.cluster import KMeans

#import data
film_data = pd.read_csv("DisneyMoviesDataset.csv", encoding='latin-1')  
film_data.head()

#drop N/As 
film_data = film_data.dropna(subset=['rotten_tomatoes', 'Directed by', 'metascore'])

#drop variables not of interest
film_data = film_data.drop(['Written by', 'Produced by', 'Running time', 'Release date'], axis=1)

## Grou By variable of interest
film_data.groupby('rotten_tomatoes').count()

## View
film_data.head()



#create a pairplot 

## sns.pairplot(film_data)

