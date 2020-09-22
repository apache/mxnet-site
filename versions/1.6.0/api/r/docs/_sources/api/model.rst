Model
====================================================

Create, load/save, and use MXNet models
------------------------------------------------


====================================================================  ============================================================================
:doc:`mx.model.FeedForward.create <./mx.model.FeedForward.create>`    Create a MXNet Feedforward neural net model with the specified training
:doc:`mx.model.buckets <./mx.model.buckets>`                          Train RNN with bucket support
:doc:`mx.model.init.params <./mx.model.init.params>`                  Parameter initialization
:doc:`mx.model.load <./mx.model.load>`                                Load model checkpoint from file
:doc:`mx.model.save <./mx.model.save>`                                Save model checkpoint into file
:doc:`predict.MXFeedForwardModel <./predict.MXFeedForwardModel>`      Predict the outputs given a model and dataset
:doc:`is.serialized <./is.serialized>`                                Check if the model has been serialized into RData-compatiable format
:doc:`mx.serialize <./mx.serialize>`                                  Serialize MXNet model into RData-compatiable format
:doc:`mx.unserialize <./mx.unserialize>`                              Unserialize MXNet model from Robject
:doc:`mx.mlp <./mx.mlp>`                                              Convenience interface for multiple layer perceptron
:doc:`mx.infer.rnn <./mx.infer.rnn>`                                  Inference of RNN model
:doc:`mx.infer.rnn.one <./mx.infer.rnn.one>`                          Inference for one-to-one fusedRNN (CUDA) models
:doc:`mx.infer.rnn.one.unroll <./mx.infer.rnn.one.unroll>`            Inference for one-to-one unroll models
:doc:`mx.nd.RNN <./mx.nd.RNN>`                                        Applies recurrent layers to input data
:doc:`mx.symbol.RNN <./mx.symbol.RNN>`                                Applies recurrent layers to input data
:doc:`rnn.graph <./rnn.graph>`                                        Generate a RNN symbolic model - requires CUDA
:doc:`rnn.graph.unroll <./rnn.graph.unroll>`                          Unroll representation of RNN running on non CUDA device
====================================================================  ============================================================================

.. toctree::
   :titlesonly:
   :hidden:
   
   mx.model.FeedForward.create
   mx.model.buckets
   mx.model.init.params
   mx.model.load
   mx.model.save
   predict.MXFeedForwardModel
   is.serialized
   mx.serialize
   mx.unserialize
   mx.mlp
   mx.infer.rnn
   mx.infer.rnn.one
   mx.infer.rnn.one.unroll
   mx.nd.RNN
   mx.symbol.RNN
   rnn.graph
   rnn.graph.unroll

