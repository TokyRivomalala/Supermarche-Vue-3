<template>
    <div class="container">
                        <h4>{{ article.info }}</h4>
        <div class = "list mt-4">
            <div class="row">
                <div class="col-2">
                    <h3>Nos Articles</h3>
                </div>
                <div class="ml-4">
                    <form action = "{{  url('/')  }}/deconnexion" method = "POST">
                        <button type="submit" class="btn btn-danger mb-4">Deconnexion</button>
                    </form>
                </div>
            </div>
            <form class = "mt-4" action = "{{  url('/')  }}/article" method = "GET">
                <h5>Votre recherche ici</h5>
                    <!-- @if (isset($erreur))
                        <span class="text text-danger">{{ $erreur }}</span>   
                    @endif -->
                <div class="row ml-1 ">
                    <div class="form-group">
                        <label  class = "mt-2" for="exampleInputEmail1">Code</label>
                        <input type="text" class="form-control col-md-8" id="exampleInputEmail1" name = "code">
                    </div>
                    <div class="form-group">
                        <label  class = "mt-2" for="exampleInputEmail1">Designation</label>
                        <input type="text" class="form-control col-md-8" id="exampleInputEmail1" name = "designation">
                    </div>
                </div>
                <div class="row ml-1 ">
                    <div class="form-group">
                        <label  class = "mt-2" for="exampleInputEmail1">Trier Par</label><br>
                        <select class="custom-select col-md-12" name = "orderBy">
                            <option value = "prixunitaire" selected>Prix Unitaire</option>
                            <option value="designation">Designation</option>
                        </select>
                    </div>
                    <div class="form-group" style="margin-left: 75px" >
                        <label  class = "mt-2" for="exampleInputEmail1">Ordre</label><br>
                        <select class="custom-select col-md-12" name = "order">
                            <option value = "ASC" selected>Croissant</option>
                            <option value="DESC">Decroissant</option>
                        </select>
                    </div>
                </div>
                <div class="row ml-1 ">
                    <button type="submit" class="btn btn-primary mb-4">Rechercher</button>
                </div>
            </form>
            <div class="table">
                <table class="table table-striped mt-3">
                    <tr>
                            <!-- {{--  <th>Code
                                <a href="{{  url('/')  }}/article/code-asc"><i class="fas fa-arrow-up mr-1"></i></a>
                                <a href="{{  url('/')  }}/article/code-desc"><i class="fas fa-arrow-down"></i></a>
                            </th>
                            <th>Designation
                                <a href="{{  url('/')  }}/article/designation-asc"><i class="fas fa-arrow-up mr-1"></i></a>
                                <a href="{{  url('/')  }}/article/designation-desc"><i class="fas fa-arrow-down"></i></a>
                            </th>  --}} -->
                        <th>Code</th>
                        <th>Designation </th>
                        <th>Quantite Stock</th>
                        <th>Prix Unitaire</th>
                        <th>Supprimer</th>
                        <th>Modifier</th>
                    </tr>
                    <tr
                        v-for="articles in article.article" 
                        :key="articles.id" 
                    >
                            <td>{{ articles.code }}</td>
                            <td>{{ articles.designation }}</td>
                            <td>{{ articles.quantiteStock }}</td>
                            <td>{{ articles.prixUnitaire }}</td>
                            <td><a href="{{route('deleteArticle', ['id' => articles.idarticle])}}">Suppr</a></td>
                            <td><a href="{{route('updateArticle', ['id' => articles.idarticle])}}">Modif</a></td>
                    </tr>
                        <!-- @endforeach -->
                </table>
                    <!-- <div class="pagination">
                        
                        @if (isset($query))
                            {{ $article->appends($query)->links() }}          
                        @else
                            {{ $article->links() }}  
                        @endif
                    </div> -->

            </div>
        </div>
    </div>
</template>

<script>
import { reactive } from 'vue';
const axios = require('axios');

    export default {
        name : 'Article',
    
        setup(){

            const article = reactive({
                article : [
                    {code : 'FRT' , designation : 'Frites' , quantiteStock : '24' , prixUnitaire : '2500'},
                    {code : 'GAT' , designation : 'Gateau' , quantiteStock : '13' , prixUnitaire : '10000'},
                    {code : 'BSC' , designation : 'Biscuit' , quantiteStock : '7' , prixUnitaire : '500'}
                ],
                info : null,
                
            });

            return{
                article
            }
        },

        mounted () {
            let config = {
                method: 'get',
                url: 'article',
                baseURL: 'http://localhost/Laravel-7-WebService-Supermarche/public/api/',
                headers: { 'Authorization': 'Bearer b0314c2dcea142c1027572b66022a1cc6cc9285d' }
            }
            axios(config)
                .then(response => (this.article.info = response.data.article.article.data[0].code))
                //.then(response => (this.article.info = response.data.erreur))
                //.catch(error => this.article.info = error.response)
        }
    }
</script>

<style>

</style>>