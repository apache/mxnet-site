

``mx.nd.softmin``
==================================

Description
----------------------

Applies the softmin function.

The resulting array contains elements in the range (0,1) and the elements along the given axis sum
up to 1.

.. math::

   softmin(\mathbf{z/t})_j = \frac{e^{-z_j/t}}{\sum_{k=1}^K e^{-z_k/t}}

for :math:`j = 1, ..., K`

t is the temperature parameter in softmax function. By default, t equals 1.0


**Example**::

	 
	 x = [[ 1.  2.  3.]
	 [ 3.  2.  1.]]
	 
	 softmin(x,axis=0) = [[ 0.88079703,  0.5,  0.11920292],
	 [ 0.11920292,  0.5,  0.88079703]]
	 
	 softmin(x,axis=1) = [[ 0.66524094,  0.24472848,  0.09003057],
	 [ 0.09003057,  0.24472848,  0.66524094]]
	 
	 
	 


Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``data``                               | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | The input array.                                           |
+----------------------------------------+------------------------------------------------------------+
| ``axis``                               | int, optional, default='-1'.                               |
|                                        |                                                            |
|                                        | The axis along which to compute softmax.                   |
+----------------------------------------+------------------------------------------------------------+
| ``temperature``                        | double or None, optional, default=None.                    |
|                                        |                                                            |
|                                        | Temperature parameter in softmax                           |
+----------------------------------------+------------------------------------------------------------+
| ``dtype``                              | {None, 'float16', 'float32', 'float64'},optional,          |
|                                        | default='None'.                                            |
|                                        |                                                            |
|                                        | DType of the output in case this can't be inferred.        |
|                                        | Defaults to the same as input's dtype if not defined       |
|                                        | (dtype=None).                                              |
+----------------------------------------+------------------------------------------------------------+
| ``use.length``                         | boolean or None, optional, default=0.                      |
|                                        |                                                            |
|                                        | Whether to use the length input as a mask over the data    |
|                                        | input.                                                     |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.ndarray


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/nn/softmin.cc#L57

