.. raw:: html



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

Value
----------

``out`` The result mx.ndarray


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/master/src/operator/nn/softmax.cc#L137


.. disqus::
   :disqus_identifier: mx.nd.softmin
