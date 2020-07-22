

``mx.nd.sample.uniform``
================================================

Description
----------------------

Concurrent sampling from multiple
uniform distributions on the intervals given by *[low,high)*.

The parameters of the distributions are provided as input arrays.
Let *[s]* be the shape of the input arrays, *n* be the dimension of *[s]*, *[t]*
be the shape specified as the parameter of the operator, and *m* be the dimension
of *[t]*. Then the output will be a *(n+m)*-dimensional array with shape *[s]x[t]*.

For any valid *n*-dimensional index *i* with respect to the input arrays, *output[i]*
will be an *m*-dimensional array that holds randomly drawn samples from the distribution
which is parameterized by the input values at index *i*. If the shape parameter of the
operator is not set, then one sample will be drawn per distribution and the output array
has the same shape as the input arrays.


**Example**::

	 
	 low = [ 0.0, 2.5 ]
	 high = [ 1.0, 3.7 ]
	 
	 // Draw a single sample for each distribution
	 sample_uniform(low, high) = [ 0.40451524,  3.18687344]
	 
	 // Draw a vector containing two samples for each distribution
	 sample_uniform(low, high, shape=(2)) = [[ 0.40451524,  0.18017688],
	 [ 3.18687344,  3.68352246]]
	 
	 


Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``low``                                | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | Lower bounds of the distributions.                         |
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
| ``high``                               | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | Upper bounds of the distributions.                         |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.ndarray


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/random/multisample_op.cc#L277

