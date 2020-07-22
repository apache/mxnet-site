

``mx.nd.sample.generalized.negative.binomial``
============================================================================================

Description
----------------------

Concurrent sampling from multiple
generalized negative binomial distributions with parameters *mu* (mean) and *alpha* (dispersion).

The parameters of the distributions are provided as input arrays.
Let *[s]* be the shape of the input arrays, *n* be the dimension of *[s]*, *[t]*
be the shape specified as the parameter of the operator, and *m* be the dimension
of *[t]*. Then the output will be a *(n+m)*-dimensional array with shape *[s]x[t]*.

For any valid *n*-dimensional index *i* with respect to the input arrays, *output[i]*
will be an *m*-dimensional array that holds randomly drawn samples from the distribution
which is parameterized by the input values at index *i*. If the shape parameter of the
operator is not set, then one sample will be drawn per distribution and the output array
has the same shape as the input arrays.

Samples will always be returned as a floating point data type.


**Example**::

	 
	 mu = [ 2.0, 2.5 ]
	 alpha = [ 1.0, 0.1 ]
	 
	 // Draw a single sample for each distribution
	 sample_generalized_negative_binomial(mu, alpha) = [ 0.,  3.]
	 
	 // Draw a vector containing two samples for each distribution
	 sample_generalized_negative_binomial(mu, alpha, shape=(2)) = [[ 0.,  3.],
	 [ 3.,  1.]]
	 
	 


Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``mu``                                 | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | Means of the distributions.                                |
+----------------------------------------+------------------------------------------------------------+
| ``shape``                              | Shape(tuple), optional, default=[].                        |
|                                        |                                                            |
|                                        | Shape to be sampled from each random distribution.         |
+----------------------------------------+------------------------------------------------------------+
| ``dtype``                              | {'None', 'float16', 'float32', 'float64'},optional,        |
|                                        | default='None'.                                            |
|                                        |                                                            |
|                                        | DType of the output in case this can't be inferred.        |
|                                        | Defaults to float32 if not defined                         |
|                                        | (dtype=None).                                              |
+----------------------------------------+------------------------------------------------------------+
| ``alpha``                              | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | Alpha (dispersion) parameters of the distributions.        |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.ndarray


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/random/multisample_op.cc#L293

